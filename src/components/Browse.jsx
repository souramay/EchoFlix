import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import MovieRecent from "./MovieRecent";
import VideoBack from "./VideoBack";
import useFetchMovies from "../utils/Hooks/useFetchMovies";
import { useEffect, Suspense } from "react";
import { NowPlayingurl, popular, Toprated, Upcoming } from "../utils/constants/ImgConst";
import SecondaryComponent from "./SecondaryComponent";
import { addMovie, addPopularMovies, addTopratedMovies, addUpcomingMovies, setRandomMovie } from "../utils/redux/MovieSlice";
import { clearGpt } from "../utils/redux/GptSlice";
import Loader from "./Loader";

const Browse = () => {
  const moviesList = useSelector((state) => state.movies.NowplayingMovies);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const TopratedMovies = useSelector((state) => state.movies.TopratedMovies);
  const UpcomingMovies = useSelector((state) => state.movies.UpcomingMovies);
  const randomMovie=useSelector((state) => state.movies.randomMovie)

  const dispatch=useDispatch();

  useFetchMovies(NowPlayingurl, addMovie,moviesList);
  useFetchMovies(popular, addPopularMovies, popularMovies);
  useFetchMovies(Toprated, addTopratedMovies, TopratedMovies);
  useFetchMovies(Upcoming, addUpcomingMovies, UpcomingMovies);

 

  // Pick a new random movie whenever the list is available/changes
  useEffect(() => {
    if (moviesList.length > 0 && !randomMovie) {
      const pickedMovie = moviesList[Math.floor(Math.random() * moviesList.length)];
      dispatch(setRandomMovie(pickedMovie));
    }
  }, [moviesList]);

  // Clear GPT state once on mount
  useEffect(() => {
    dispatch(clearGpt());
  }, [dispatch]);

  // console.log("NowplayingMovies:", moviesList);
  // console.log("PopularMovies:", popularMovies);
  // console.log("TopratedMovies:", TopratedMovies);
  // console.log("UpcomingMovies:", UpcomingMovies);
  // console.log("RandomMovie:", randomMovie);

  return (
    <>
      <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-black via-black/80 to-gray-900 " />
      {(moviesList.length > 0 && popularMovies.length > 0 && TopratedMovies.length > 0 && UpcomingMovies.length > 0 && randomMovie)
        ? (
          <>
            <Header />
            <div className="flex flex-col px-4 pt-8 max-w-full">
              <div>
                <MovieRecent
                  title={randomMovie?.title}
                  overview={randomMovie?.overview}
                  release={randomMovie?.release_date}
                  popularity={randomMovie?.popularity}
                  vote={randomMovie?.vote_average}
                  id={randomMovie?.id}
                  videoKey={randomMovie?.videos?.find(v => v.site === "YouTube" && v.key)?.key}
                />
                <VideoBack key={randomMovie.id} movieId={randomMovie.id} movieImg={randomMovie.backdrop_path} />
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
        )
        : <Loader />
      }
    </>
  );
};

export default Browse;
