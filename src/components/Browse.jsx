import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import MovieRecent from "./MovieRecent";
import VideoBack from "./VideoBack";
import useFetchMovies from "../utils/Hooks/useFetchMovies";
import { useEffect, useState } from "react";
import { NowPlayingurl, popular, Toprated, Upcoming } from "../utils/constants/ImgConst";
import SecondaryComponent from "./SecondaryComponent";
import { addMovie, addPopularMovies, addTopratedMovies, addUpcomingMovies } from "../utils/redux/MovieSlice";
import { clearGpt } from "../utils/redux/GptSlice";
import Loader from "./Loader";

const Browse = () => {
  const moviesList = useSelector((state) => state.movies.NowplayingMovies);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const TopratedMovies = useSelector((state) => state.movies.TopratedMovies);
  const UpcomingMovies = useSelector((state) => state.movies.UpcomingMovies);

  const dispatch=useDispatch();

  useFetchMovies(NowPlayingurl, addMovie,moviesList);
  useFetchMovies(popular, addPopularMovies, popularMovies);
  useFetchMovies(Toprated, addTopratedMovies, TopratedMovies);
  useFetchMovies(Upcoming, addUpcomingMovies, UpcomingMovies);

  const [movie, setMovie] = useState(null);

  // Pick a new random movie whenever the list is available/changes
  useEffect(() => {
    if (moviesList.length > 0) {
      const randomMovie = moviesList[Math.floor(Math.random() * moviesList.length)];
      setMovie(randomMovie);
    }
  }, [moviesList]);

  // Clear GPT state once on mount
  useEffect(() => {
    dispatch(clearGpt());
  }, [dispatch]);

  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black via-black/80 to-gray-900 " />
      {
        (moviesList.length > 0 && popularMovies.length > 0 && TopratedMovies.length > 0 && UpcomingMovies.length > 0) ? (
          <>
            <Header />
            <div className="flex flex-col px-4 pt-8 max-w-full">
              <div>
                <MovieRecent
                  title={movie?.title}
                  overview={movie?.overview}
                  release={movie?.release_date}
                  popularity={movie?.popularity}
                  vote={movie?.vote_average}
                />
                {movie?.id && <VideoBack key={movie.id} movieId={movie.id} movieImg={movie.backdrop_path} />}
              </div>
              <div className="w-full min-h-[400px] bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 rounded-t-3xl py-4 pl-4 pr-2 z-10 mt-8 sm:py-12 sm:pl-6 sm:pr-4 md:py-13 md:pl-8 md:pr-6 lg:py-34 lg:pl-10 lg:pr-7 max-w-full overflow-hidden">
                <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-6">
                  <SecondaryComponent title={"Upcoming"} movies={UpcomingMovies} />
                  <SecondaryComponent title={"Now Playing"} movies={moviesList} />
                  <SecondaryComponent title={"Popular"} movies={popularMovies} />
                  <SecondaryComponent title={"Top Rated"} movies={TopratedMovies} />
                </div>
              </div>
            </div>
          </>
        ) : <Loader />
      }
    </>
  );
};

export default Browse;
