import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import useFetchVideo from "../utils/Hooks/useFetchVideo";
import { useEffect, useState, useRef } from "react";
import { setTrailer, setVideoplay, resetDetail } from "../utils/redux/DetailMovieSlice";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Overview from "./overview";
import Clips from "./clips";
import Caste from "./caste";
import Loader from "./Loader";

import useFetchDetails from "../utils/Hooks/useFetchDetails";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import Similar from "./Similar";
import usefetchcaste from "../utils/Hooks/usefetchcaste";
import useSimilarfetch from "../utils/Hooks/useSimilarfetch";
import useReviewfetch from "../utils/Hooks/useReviewfetch";
import usetvreview from "../utils/Hooks/usetvreview";
import usetvdetail from "../utils/Hooks/usetvdetail";
import usetvcaste from "../utils/Hooks/usetvcaste";
import usetvvideo from "../utils/Hooks/usefetchtvvideo";
import usetvsimilar from "../utils/Hooks/usetvsimilar";

const Tvdetail = () => {
  const { movieId } = useParams();
  const videos = useSelector((state) => state.details.trailer) || [];
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.details.detail) || [];
  const videoplay = useSelector((state) => state.details.videoplay);
  const playerRef = useRef(null);
  const navigate = useNavigate();
  

  const [overviews, setoverviews] = useState(true);
  const [clip, setclip] = useState(false);
  const [caste, setcaste] = useState(false);
  const [reviews, setreviews] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [similarRecommended, setSimilarRecommended] = useState(false);

  // Add a loading state
  const [loading, setLoading] = useState(true);

  // reset detail first so subsequent hook effects don't pick stale data
  useEffect(() => {
    dispatch(resetDetail());
  }, [movieId, dispatch]);

  // fetchers: pass mediaType "tv"
  usetvvideo(movieId, setTrailer);
  usetvdetail(movieId);
  usetvcaste(movieId);
  usetvsimilar(movieId);
  usetvreview(movieId);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);
  

  useEffect(() => {
    if (videoplay === null) {
      const trailerVideos = videos.filter((video) => video.type === "Trailer");
      const selected =
        trailerVideos.length > 0
          ? trailerVideos[Math.floor(Math.random() * trailerVideos.length)]
          : null;
      dispatch(setVideoplay(selected));
    }
  }, [videos, movieId]);

  useEffect(() => {
    // Reset videoplay when movieId changes
    dispatch(setVideoplay(null));
  }, [movieId]);

  useEffect(() => {
    // Set loading to true when movieId changes
    setLoading(true);
    // Use TV fields (name / original_name) as well as movie title
    if (detail && (detail.title || detail.name || detail.original_name)) {
      setLoading(false);
    } else {
      const timeout = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timeout);
    }
  }, [movieId, detail]);

  useEffect(() => {
    dispatch(resetDetail());
    // then fetch new movie detail and trailer
  }, [movieId]);

  useEffect(() => {
    setoverviews(true);
    setclip(false);
    setcaste(false);
    setreviews(false);
    setGallery(false);
    setSimilarRecommended(false);
  }, [movieId]);

  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-br from-black via-gray-950 to-gray-900 overflow-x-hidden">
      <Header />
      <div className="px-4 w-full ">
        {loading ? (
          <div className="flex justify-center items-center min-h-[40vh]">
            <Loader />
          </div>
        ) : (
          <div>
            <button
              className="flex items-center gap-2 cursor-pointer text-white px-3 py-2 rounded hover:bg-gray-800 mt-2 ml-0 md:-mt-3 md:text-lg"
              onClick={() => navigate(-1)} // <-- changed here
            >
              <FaChevronLeft />
              Back
            </button>
            <p className="p-1 mt-10 text-sm font-serif text-gray-400 md:text-2xl md:mx-100 md:mt-2">
              {detail.name || detail.original_name || detail.title || detail.original_title}
            </p>

            {videoplay ? (
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
            ) : (
              <div className="mx-auto w-full max-w-3xl lg:max-w-5xl aspect-video mt-5 rounded-lg bg-black flex items-center justify-center">
                <img
                  src={
                    detail.backdrop_path
                      ? `https://image.tmdb.org/t/p/w780${detail.backdrop_path}`
                      : detail.poster_path
                      ? `https://image.tmdb.org/t/p/w500${detail.poster_path}`
                      : "/default-movie.jpg" // fallback image
                  }
                  alt={detail.title || "Movie"}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
            <div className="flex mt-8 justify-center gap-3 text-gray-400 text-[11px] flex-wrap">
              <p
                className={`cursor-pointer md:text-xl pb-1 ${
                  overviews ? "border-b-2 border-gray-400" : ""
                }`}
                onClick={() => {
                  setoverviews(true);
                  setclip(false);
                  setcaste(false);
                  setreviews(false);
                  setGallery(false);
                  setSimilarRecommended(false);
                }}
              >
                overviews
              </p>
              <p
                className={`pb-1 cursor-pointer md:text-xl ${
                  clip ? "border-b-2 border-gray-400" : ""
                }`}
                onClick={() => {
                  setclip(true);
                  setoverviews(false);
                  setcaste(false);
                  setreviews(false);
                  setGallery(false);
                  setSimilarRecommended(false);
                }}
              >
                Clips and Trailers
              </p>
              <p
                className={`cursor-pointer  pb-1 md:text-xl ${
                  caste ? "border-b-2 border-gray-400" : ""
                }`}
                onClick={() => {
                  setcaste(true);
                  setoverviews(false);
                  setclip(false);
                  setreviews(false);
                  setGallery(false);
                  setSimilarRecommended(false);
                }}
              >
                Caste
              </p>
              <p
                className={`cursor-pointer md:text-xl pb-1 ${
                  reviews ? "border-b-2 border-gray-400" : ""
                }`}
                onClick={() => {
                  setreviews(true);
                  setoverviews(false);
                  setclip(false);
                  setcaste(false);
                  setGallery(false);
                  setSimilarRecommended(false);
                }}
              >
                Reviews
              </p>
              <p
                className={`cursor-pointer md:text-xl pb-1 ${
                  gallery ? "border-b-2 border-gray-400" : ""
                }`}
                onClick={() => {
                  setGallery(true);
                  setoverviews(false);
                  setclip(false);
                  setcaste(false);
                  setreviews(false);
                  setSimilarRecommended(false);
                }}
              >
                Gallery
              </p>
              <p
                className={`cursor-pointer md:text-xl pb-1 ${
                  similarRecommended ? "border-b-2 border-gray-400" : ""
                }`}
                onClick={() => {
                  setoverviews(false);
                  setclip(false);
                  setcaste(false);
                  setreviews(false);
                  setGallery(false);
                  setSimilarRecommended(true); 
                }}
              >
                Similar & Recommended
              </p>
            </div>
            <div>
              {overviews && (
                <div className="flex justify-center w-full">
                  <div className="p-4 px-2 w-full  lg:max-w-6xl font-serif my-3 text-gray-200 mx-auto box-border overflow-x-auto max-w-full">
                    <Overview movieId={movieId} />
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
              {reviews && <div>{<Reviews movieId={movieId} />}</div>}
              {gallery && (
                <div>
                  <Gallery movieId={movieId} />
                </div>
              )}
              {similarRecommended && (
                <div className="mt-8">
                  <Similar movieId={movieId} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tvdetail;
