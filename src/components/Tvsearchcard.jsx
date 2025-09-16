import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterMovies } from "../utils/redux/GptSlice";
import TvSecondaryComponent from "./tvSecondaryComponent";
import Tvmoviecard from "./Tvmoviecard";
import { setVideo } from "../utils/redux/DetailMovieSlice";
import { useNavigate } from "react-router-dom";

const Tvsearchcard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movieSearch = useSelector((state) => state.gpt.MovieSearch); // Array of TMDb responses
  const movies = useSelector((state) => state.gpt.Movies);           // Array of query names

  // Filter matched TV shows based on user queries
  const filteredMovies = (Array.isArray(movieSearch) ? movieSearch : [])
    .map((resp, index) => {
      const items = Array.isArray(resp)
        ? resp
        : Array.isArray(resp?.results)
        ? resp.results
        : [];

      const queryName = (movies?.[index] || "").toLowerCase().trim();

      return items.find(
        (item) =>
          item?.name?.toLowerCase() === queryName ||
          item?.original_name?.toLowerCase() === queryName
      );
    })
    .filter(Boolean);

  // Dispatch filtered movies into Redux store when they change
  useEffect(() => {
    dispatch(setFilterMovies(filteredMovies));
  }, [dispatch, filteredMovies]);

  // Handle clicking a TV show card
  const handleClick = (id) => {
    dispatch(setVideo(id));
    navigate(`/tvdetail/${id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <h2 className="px-2 text-lg md:text-xl md:mx-0 md:text-left lg:mx-0 font-semibold mb-3 opacity-80 text-white">
        Search Results :
      </h2>

      <div
        className="flex items-start md:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-2
                   px-1 sm:mx-0 sm:px-0 md:w-auto md:mx-0
                   pb-1 overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {filteredMovies.map((movie) => {
          // Only render card if poster or backdrop image exists
          if (!movie.poster_path && !movie.backdrop_path) {
            return null;
          }

          return (
            <div
              key={movie.id}
              className="flex-none w-28 sm:w-20 md:w-32 md:h-auto lg:w-64 snap-start md:mx-9 lg:-mr-6 cursor-pointer"
              onClick={() => handleClick(movie.id)}
            >
              <Tvmoviecard poster={movie.poster_path} backdrop={movie.backdrop_path} />
            </div>
          );
        })}
      </div>

      <h2 className="px-2 text-lg md:text-xl md:mx-0 md:text-left lg:mx-0 py-12 font-semibold mb-3 opacity-80 text-white">
        If you liked this, you might also like :
      </h2>

      <div className="relative md:mx-0 lg:mx-0">
        {movies.length > 0 &&
          movies.map((movieList, index) => (
            <TvSecondaryComponent
              key={index}
              title={movieList}
              items={movieSearch[index]?.results || []}
            />
          ))}
      </div>
    </div>
  );
};

export default Tvsearchcard;
