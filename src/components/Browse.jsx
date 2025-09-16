import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import MovieRecent from "./MovieRecent";
import VideoBack from "./VideoBack";
import useFetchMovies from "../utils/Hooks/useFetchMovies";
import { useEffect, Suspense, useState } from "react";
import SecondaryComponent from "./SecondaryComponent";
import { resetvideoId, setRandomMovie } from "../utils/redux/MovieSlice";
import { clearGpt } from "../utils/redux/GptSlice";
import Loader from "./Loader";
import movieSections from "../utils/constants/MovieSelection";
import actionMap from "../utils/actionmap";
import { FaFilm, FaTv } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { resetTvvideoId } from "../utils/redux/tvdetailslice";

const Browse = () => {
  const moviesList = useSelector((state) => state.movies.NowplayingMovies);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const TopratedMovies = useSelector((state) => state.movies.TopratedMovies);
  const UpcomingMovies = useSelector((state) => state.movies.UpcomingMovies);
  const randomMovie=useSelector((state) => state.movies.randomMovie)
  const navigate=useNavigate();
  const location=useLocation();

  const dispatch=useDispatch();
const [ismovie,setismovie]=useState(true);
// hardcoded approach
  // useFetchMovies(NowPlayingurl, addMovie,moviesList);
  // useFetchMovies(popular, addPopularMovies, popularMovies);
  // useFetchMovies(Toprated, addTopratedMovies, TopratedMovies);
  // useFetchMovies(Upcoming, addUpcomingMovies, UpcomingMovies);


   // grab states dynamically
  const sectionStates = movieSections.map((section) =>
    useSelector((state) => state.movies[section.key])
  );

  // fetch dynamically
  movieSections.forEach((section, i) => {
    useFetchMovies(section.url, actionMap[section.action], sectionStates[i]);
  });




  // Pick a new random movie whenever the list is available/changes
  useEffect(() => {
    if (moviesList.length > 0 && !randomMovie) {
      const pickedMovie = moviesList[Math.floor(Math.random() * moviesList.length)];
      dispatch(setRandomMovie(pickedMovie));
    }
  }, [moviesList]);
  const allLoaded = sectionStates.every(section => section.length > 0) && randomMovie;

  // Clear GPT state once on mount
  useEffect(() => {
    dispatch(clearGpt());
  }, [dispatch]);

  

useEffect(() => {
  if (allLoaded) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [allLoaded]);
 
useEffect(() => {
  if(location.pathname==="/browse"){
    setismovie(true);
  }
  else if(location.pathname==="/tvBrowse"){
    setismovie(false);
  }
}, [location.pathname]);

  

  // console.log("NowplayingMovies:", moviesList);
  // console.log("PopularMovies:", popularMovies);
  // console.log("TopratedMovies:", TopratedMovies);
  // console.log("UpcomingMovies:", UpcomingMovies);
  // console.log("RandomMovie:", randomMovie);

  return (
    <>
      <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-black via-black/80 to-gray-900 " />
      {allLoaded
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
                 <div className="flex -mb-21 z-20 mt-8 sticky ml-7    bg-gray-800 bg-opacity-50 rounded-full p-[2px] w-full max-w-[200px] sm:max-w-[260px]  shadow-sm">
  <button
    className={`flex-1 cursor-pointer min-w-[90px] py-2 rounded-full flex justify-center items-center gap-1 text-xs font-semibold transition-colors duration-200 ${
      ismovie
        ? "bg-red-800 text-white shadow-sm"
        : "text-gray-400 hover:bg-gray-700"
    }`}
    onClick={() => {setismovie(true);
      navigate("/browse");
      dispatch(resetTvvideoId());
            dispatch(resetvideoId());
      ``
    }}
    aria-label="Movies"
  >
    <FaFilm size={14} />
    <span className="hidden sm:inline">Movies</span>
  </button>
  <button
    className={`flex-1 cursor-pointer  min-w-[90px] py-2 ml-1 rounded-full flex justify-center items-center gap-1 text-xs font-semibold transition-colors duration-200 ${
      !ismovie
        ? "bg-red-800 text-white shadow-sm"
        : "text-gray-400 hover:bg-gray-700"
    }`}
onClick={() => { setismovie(false);
    navigate("/tvBrowse");
    dispatch(resetTvvideoId());
      dispatch(resetvideoId());
}}
    aria-label="TV Shows"
  >
    <FaTv size={14} />
    <span className="hidden sm:inline">TV Shows</span>
  </button>
</div>
              <div className="w-full min-h-[400px] bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 rounded-t-3xl py-4 pl-4 pr-2 z-10 mt-8 sm:py-12 sm:pl-6 sm:pr-4 md:py-13 md:pl-8 md:pr-6 lg:py-34 lg:pl-10 lg:pr-7 max-w-full overflow-hidden">
              {/* hardcoded approach */}
                <div className="space-y-4 mt-10 sm:space-y-6 md:space-y-8 lg:space-y-6">
                  {/* <SecondaryComponent title={"Upcoming"} movies={UpcomingMovies} />
                  <SecondaryComponent title={"Now Playing"} movies={moviesList} />
                  <SecondaryComponent title={"Popular"} movies={popularMovies} />
                  <SecondaryComponent title={"Top Rated"} movies={TopratedMovies} /> */}

                  {/* dynamic approach */}
                  {movieSections.map((section, i) => (
        <SecondaryComponent
          key={section.title}
          title={section.title}
          movies={sectionStates[i]}
        />
      ))}
                  
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
