import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import MovieRecent from "./MovieRecent";
import VideoBack from "./VideoBack";
import useFetchMovies from "../utils/Hooks/useFetchMovies";
import { useEffect, Suspense, useState } from "react";
import SecondaryComponent from "./SecondaryComponent";
import { resetmovie, resetvideoId, setRandomMovie } from "../utils/redux/MovieSlice";
import { clearGpt } from "../utils/redux/GptSlice";
import Loader from "./Loader";

import actionMap from "../utils/actionmap";

import { FaFilm, FaTv } from "react-icons/fa";
import tvSections from "../utils/constants/tvselection";

import { useNavigate } from "react-router-dom";
import TvSecondaryComponent from "./tvSecondaryComponent";
import Tvvideoback from "./Tvvideoback";
import { resettv } from "../utils/redux/tvSlice";
import { resetTvvideoId } from "../utils/redux/tvdetailslice";


const tvBrowse = () => {
  const airingToday = useSelector((state) => state.tv.onTheAir);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const TopratedMovies = useSelector((state) => state.movies.TopratedMovies);
  const UpcomingMovies = useSelector((state) => state.movies.UpcomingMovies);
  const randomMovie=useSelector((state) => state.movies.randomMovie)

  const dispatch=useDispatch();
 const [istv,setistv]=useState(true);
 const navigate=useNavigate();


// hardcoded approach
  // useFetchMovies(NowPlayingurl, addMovie,airingToday);
  // useFetchMovies(popular, addPopularMovies, popularMovies);
  // useFetchMovies(Toprated, addToApratedMovies, TopratedMovies);
  // useFetchMovies(Upcoming, addUpcomingMovies, UpcomingMovies);


   // grab states dynamically
  const sectionStates = tvSections.map((section) =>
    useSelector((state) => state.tv[section.key])
  );

  // fetch dynamically
  tvSections.forEach((section, i) => {
    useFetchMovies(section.url, actionMap[section.action], sectionStates[i]);
  });




  // Pick a new random movie whenever the list is available/changes
  useEffect(() => {
    if (airingToday.length > 0 && !randomMovie) {
      const pickedMovie = airingToday[Math.floor(Math.random() * airingToday.length)];
      dispatch(setRandomMovie(pickedMovie));
    }
  }, [airingToday]);
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
 

  

  // console.log("NowplayingMovies:", airingToday);
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
  title={randomMovie?.title || randomMovie?.name}   // Movie or TV
  overview={randomMovie?.overview}
  release={randomMovie?.release_date || randomMovie?.first_air_date} // Movie or TV
  popularity={randomMovie?.popularity}
  vote={randomMovie?.vote_average}
  id={randomMovie?.id}
  videoKey={randomMovie?.videos?.find(v => v.site === "YouTube" && v.key)?.key}
/>

<Tvvideoback
  key={randomMovie?.id}
  movieId={randomMovie?.id}
  movieImg={randomMovie?.backdrop_path || randomMovie?.poster_path} // fallback to poster if no backdrop
  title={randomMovie?.title || randomMovie?.name}  // helpful for TV shows
  mediaType={randomMovie?.media_type || (randomMovie?.title ? "movie" : "tv")} // explicit type
/>

              </div>
                <div className="flex  -mb-21 z-20 mt-8 sticky ml-7    bg-gray-800 bg-opacity-50 rounded-full p-[2px] w-full max-w-[200px] sm:max-w-[260px]  shadow-sm">
  <button
    className={`flex-1 min-w-[90px] cursor-pointer py-2 rounded-full flex justify-center items-center gap-1 text-xs font-semibold transition-colors duration-200 ${
      !istv
        ? "bg-red-800 text-white shadow-sm"
        : "text-gray-400 hover:bg-gray-700"
    }`}
    onClick={() => {setistv(false);
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
    className={`flex-1 cursor-pointer min-w-[90px] py-2 ml-1 rounded-full flex justify-center items-center gap-1 text-xs font-semibold transition-colors duration-200 ${
      istv
        ? "bg-red-800 text-white shadow-sm"
        : "text-gray-400 hover:bg-gray-700"
    }`}
onClick={() => { setistv(true);
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
              <div className="w-full min-h-[400px]  bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 rounded-t-3xl py-4 pl-4 pr-2 z-10 mt-8 sm:py-12 sm:pl-6 sm:pr-4 md:py-13 md:pl-8 md:pr-6 lg:py-34 lg:pl-10 lg:pr-7 max-w-full overflow-hidden">
              {/* hardcoded approach */}
                <div className="space-y-4 mt-10 sm:space-y-6 md:space-y-8 lg:space-y-6">
                  {/* <SecondaryComponent title={"Upcoming"} movies={UpcomingMovies} />
                  <SecondaryComponent title={"Now Playing"} movies={airingToday} />
                  <SecondaryComponent title={"Popular"} movies={popularMovies} />
                  <SecondaryComponent title={"Top Rated"} movies={TopratedMovies} /> */}

                  {/* dynamic approach */}
           {tvSections.map((section, i) => (
        <TvSecondaryComponent
          key={section.title}
          title={section.title}
          items={sectionStates[i]} 
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

export default tvBrowse;