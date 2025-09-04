import { useSelector } from "react-redux";
import Header from "./header";
import MovieRecent from "./MovieRecent";
import VideoBack from "./VideoBack";
import useNowPlayingMovies from "../utils/Hooks/useNowPlayingMovies";
import { useEffect, useState } from "react";

const Browse = () => {
  const moviesList = useSelector((state) => state.movies.initialState);
  useNowPlayingMovies();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (moviesList.length > 0 && !movie) {
      const randomMovie = moviesList[Math.floor(Math.random() * moviesList.length)];
      setMovie(randomMovie);
    }
  }, [moviesList, movie]);

  return (
    <div className="bg-gradient-to-b from-black ">
      <Header />
      <MovieRecent
        title={movie?.title}
        overview={movie?.overview}
        release={movie?.release_date}
        popularity={movie?.popularity}
        vote={movie?.vote_average}
      />
      {movie?.id && <VideoBack movieId={movie?.id} movieImg={movie?.backdrop_path} />}
    </div>
  );
};

export default Browse;
