import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import useFetchVideo from "../utils/Hooks/useFetchVideo";
import { useEffect, useState, useRef } from "react";
import { setTrailer, setVideoplay } from "../utils/redux/DetailMovieSlice";
import { FaChevronLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Overview from "./overview";
import Clips from "./clips";
import Caste from "./caste";

import useFetchDetails from "../utils/Hooks/useFetchDetails";

const MovieDetail = () => {
  const { movieId } = useParams();
  const videos = useSelector((state) => state.details.trailer) || [];
  const dispatch = useDispatch();
  const detail=useSelector((state) => state.details.detail) || [];
  const videoplay=useSelector((state)=>state.details.videoplay);
  const playerRef = useRef(null);

  const [overviews, setoverviews] = useState(true);
  const [clip, setclip] = useState(false);
  const [caste, setcaste] = useState(false); // renamed from music
  const [reviews,setreviews]=useState(false);


  useFetchVideo(movieId, setTrailer);
  useFetchDetails(movieId);
  

  



  

  useEffect(() => {
    if (videoplay === null) {
      const trailerVideos = videos.filter((video) => video.type === "Trailer");
      const selected =
        trailerVideos.length > 0
          ? trailerVideos[Math.floor(Math.random() * trailerVideos.length)]
          : null;
      dispatch(setVideoplay(selected));
    }
  }, [videos]); // Only depend on videos

  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-br from-black via-gray-950 to-gray-900 overflow-x-hidden">
      <Header />
      <div className="px-4 w-full ">
        <div className=" ">
        <button
          className="flex items-center gap-2 text-white px-3 py-2 rounded hover:bg-gray-800 -mt-11 -ml-4 md:-mt-3 md:text-lg"
          onClick={() => window.history.back()}
        >
          <FaChevronLeft />
          Back
        </button>
        <p className="p-1  mt-10 text-2xl font-serif text-gray-400 md:text-4xl md:mx-100 md:mt-2  ">{detail.title || detail.orignal_tittle}</p>
        </div>

        {videoplay && (
          <>
            <div
              ref={playerRef}
              className="mx-auto w-full max-w-3xl lg:max-w-5xl aspect-video mt-5 rounded-lg"
            >
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoplay.key}?rel=0&modestbranding=1&showinfo=0&autoplay=1`}
                title={videoplay.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation"
              />
            </div>
            <div className="flex mt-8 justify-center gap-7 text-gray-400 ">
  <p
    className={`md:text-lg  cursor-pointer pb-1 ${overviews ? " border-b-2 border-gray-400" : ""}`}
    onClick={() => {
      setoverviews(true);
      setclip(false);
      setcaste(false);
      setreviews(false);
    }}
  >
    overviews
  </p>
  <p
    className={`md:text-lg pb-1 cursor-pointer ${clip ? " border-b-2 border-gray-400" : ""}`}
    onClick={() => {
      setclip(true);
      setoverviews(false);
      setcaste(false);
      setreviews(false);
    }}
  >
    Clips and Trailers
  </p>
  <p
    className={`md:text-lg cursor-pointer pb-1 ${caste ? "border-b-2 border-gray-400" : ""}`}
    onClick={() => {
      setcaste(true);
      setoverviews(false);
      setclip(false);
      setreviews(false);
    }}
  >
    Caste
  </p>
  <p
    className={`md:text-lg cursor-pointer pb-1 ${reviews ? " border-b-2 border-gray-400" : ""}`}
    onClick={() => {
      setreviews(true);
      setoverviews(false);
      setclip(false);
      setcaste(false);
    }}
  >
    Reviews
  </p>
</div>
<div>
  {overviews && (
    <div className="text-center flex justify-center">
      <div className="p-4 w-full max-w-2xl lg:max-w-6xl font-serif my-3 text-gray-200">
        <Overview detail={detail} />
      </div>
    </div>
  )}
  {clip && (
    <div className="flex justify-center mt-8 w-full">
      <Clips playerRef={playerRef} />
    </div>
  )}
  {caste && (
    <div>
      <Caste movieId={movieId} />
    </div>
  )}
</div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
