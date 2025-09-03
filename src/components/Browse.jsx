import { useSelector } from "react-redux";
import Header from "./header"
import MovieRecent from "./MovieRecent"
import VideoBack from "./VideoBack"
import useNowPlayingMovies from "../utils/Hooks/useNowPlayingMovies";


const Browse = () => {
const moviesList = useSelector((state) => state.movies.initialState);

  useNowPlayingMovies();

  const movie = moviesList.length > 0
    ? moviesList[Math.floor(Math.random() * moviesList.length)]
    : null;

  return (
    <div>
      <Header />
      <MovieRecent title={movie?.title} overview={movie?.overview} />
      {movie?.id && <VideoBack movieId={movie?.id} />}
    </div>
  )
}

export default Browse
