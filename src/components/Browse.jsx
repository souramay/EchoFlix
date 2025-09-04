import { useSelector } from "react-redux";
import Header from "./Header";
import MovieRecent from "./MovieRecent";
import VideoBack from "./VideoBack";
import useFetchMovies from "../utils/Hooks/useFetchMovies";
import { useEffect, useState } from "react";
import { NowPlayingurl, popular, Toprated, Upcoming } from "../utils/constants/ImgConst";
import SecondaryComponent from "./SecondaryComponent";
import { addMovie, addPopularMovies, addTopratedMovies, addUpcomingMovies } from "../utils/redux/MovieSlice";

const Browse = () => {
  const moviesList = useSelector((state) => state.movies.initialState);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const TopratedMovies = useSelector((state) => state.movies.TopratedMovies);
  const UpcomingMovies = useSelector((state) => state.movies.UpcomingMovies);

  useFetchMovies(NowPlayingurl, addMovie);
  useFetchMovies(popular, addPopularMovies);
  useFetchMovies(Toprated, addTopratedMovies);
  useFetchMovies(Upcoming, addUpcomingMovies);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (moviesList.length > 0 && !movie) {
      const randomMovie = moviesList[Math.floor(Math.random() * moviesList.length)];
      setMovie(randomMovie);
    }
  }, [moviesList, movie]);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-black/80 to-gray-900">
      {/* Full-screen gradient background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black via-black/80 to-gray-900 -z-10" />
      <Header />
      <div className="flex flex-col px-4 pt-8">
        <div>
          <MovieRecent
            title={movie?.title}
            overview={movie?.overview}
            release={movie?.release_date}
            popularity={movie?.popularity}
            vote={movie?.vote_average}
          />
          {movie?.id && <VideoBack movieId={movie?.id} movieImg={movie?.backdrop_path} />}
        </div>
        <div className="w-full min-h-[400px] bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 rounded-t-3xl py-8 px-4 z-10 mt-8">
        <SecondaryComponent title={"Upcoming"} movies={UpcomingMovies} />
          <SecondaryComponent title={"Now Playing"} movies={moviesList} />
          <SecondaryComponent title={"Popular"} movies={popularMovies} />
          <SecondaryComponent title={"Top Rated"} movies={TopratedMovies} />
        </div>
      </div>
    </div>
  );
};

export default Browse;
