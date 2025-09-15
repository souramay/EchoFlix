import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterMovies } from "../utils/redux/GptSlice";
import SecondaryComponent from "./SecondaryComponent";
import Moviecard from "./Moviecard";
import SearchSecondarycomponents from "./SearchSecondarycomponent";
import { setVideo } from "../utils/redux/DetailMovieSlice";
import { useNavigate } from "react-router-dom";

const Searchmoviecard = () => {
  const dispatch = useDispatch();
  const movieSearch = useSelector((state) => state.gpt.MovieSearch); // array of TMDB responses
  const movies = useSelector((state) => state.gpt.Movies);           // array of query names
  const navigate=useNavigate();

  const filteredMovies = (Array.isArray(movieSearch) ? movieSearch : [])
    .map((resp, index) => {
      const items = Array.isArray(resp) ? resp : Array.isArray(resp?.results) ? resp.results : [];
      const queryName = (movies?.[index] || "").toLowerCase().trim();
      return items.find(
        (item) =>
          item?.title?.toLowerCase() === queryName ||
          item?.original_title?.toLowerCase() === queryName
      );
    })
    .filter(Boolean);
    
const handleClick = (id) => {
  dispatch(setVideo(id));
  navigate(`/detail/${id}`); // Pass the movie ID in the URL
};



  useEffect(() => {
    dispatch(setFilterMovies(filteredMovies));
  }, [dispatch,filteredMovies]);

  // render matched movies (or render names if you prefer)
  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4  ">
      <h2 className="px-2 text-lg md:text-xl md:mx-0 md:text-left lg:mx-0 font-semibold mb-3 opacity-80 text-white ">
        Search Results :
      </h2>

      <div
        className="flex items-start md:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-2
                   px-1 sm:mx-0 sm:px-0 md:w-auto md:mx-0
                   pb-1 overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="flex-none w-28 sm:w-20 md:w-32 md:h-auto lg:w-64 snap-start md:mx-9 lg:-mr-25"
            onClick={() => handleClick(movie.id)}
          >
            <Moviecard img={movie.poster_path} />
          </div>
        ))}
      </div>

      <h2 className="px-2 text-lg md:text-xl md:mx-0 md:text-left lg:mx-0 py-12 font-semibold mb-3 opacity-80 text-white">
        If you liked this, you might also like :
      </h2>

      <div className="relative md:mx-0 lg:mx-0">
        {movies.length > 0 &&
          movies.map((movieList, index) => (
            <SearchSecondarycomponents
              key={index}
              title={movieList}
              movies={movieSearch[index]?.results || []}
            />
          ))}
      </div>
    </div>
  );
};

export default Searchmoviecard;
