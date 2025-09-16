import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import useFetchVideo from "../utils/Hooks/useFetchVideo";
import { useEffect, useState, useRef } from "react";
import { setTrailer, setVideoplay, resetDetail } from "../utils/redux/DetailMovieSlice";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

import useFetchDetails from "../utils/Hooks/useFetchDetails";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import Similar from "./Similar";
import usefetchcaste from "../utils/Hooks/usefetchcaste";
import useSimilarfetch from "../utils/Hooks/useSimilarfetch";
import useReviewfetch from "../utils/Hooks/useReviewfetch";
import usefetchtvVideo from "../utils/Hooks/usefetchtvVideo";
import useFetchtvDetails from "../utils/Hooks/useFetchtvDetails";
import useFetchTvCaste from "../utils/Hooks/usefetchtvcaste";
import useSimilarTvfetch from "../utils/Hooks/useSimilarTvfetch";
import useReviewTvfetch from "../utils/Hooks/useReviewTvfetch";
import TvOverview from "./TvOverview";
import TvClips from "./TvClips";
import TvCaste from "./TvCaste";
import TvGallery from "./TvGallery";
import TvSimilar from "./TvSimilar";
import Clips from "./clips";
import TvReviews from "./TvReview";
import { resetTvDetail, setTvTrailer, setTvVideoplay } from "../utils/redux/tvdetailslice";
import Seasontv from "./Seaontv";



const Tvdetail = () => {
  const { tvId } = useParams();
  const videos = useSelector((state) => state.tvdetails.trailer) || [];
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.tvdetails.detail) || [];
  const videoplay = useSelector((state) => state.tvdetails.videoplay);
  const playerRef = useRef(null);
  const navigate = useNavigate();


  const [overviews, setoverviews] = useState(true);
  const [clip, setclip] = useState(false);
  const [caste, setcaste] = useState(false);
  const [reviews, setreviews] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [similarRecommended, setSimilarRecommended] = useState(false);
  const [season,setseason]=useState(false);

  // Add a loading state
  const [loading, setLoading] = useState(true);
 

  usefetchtvVideo(tvId, setTvTrailer);
  useFetchtvDetails(tvId);
  useFetchTvCaste(tvId);
  useSimilarTvfetch(tvId);
  useReviewTvfetch(tvId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tvId]);
  

  useEffect(() => {
    if (videoplay === null) {
      const trailerVideos = videos.filter((video) => video.type === "Trailer");
      const selected =
        trailerVideos.length > 0
          ? trailerVideos[Math.floor(Math.random() * trailerVideos.length)]
          : null;
      dispatch(setTvVideoplay(selected));
    }
  }, [videos, tvId]);

  useEffect(() => {
    // Reset videoplay when tvId changes
    dispatch(setVideoplay(null));
  }, [tvId]);

  useEffect(() => {
    // Set loading to true when tvId changes
    setLoading(true);
    // Simulate loading until detail is fetched
    if (detail && detail.title) {
      setLoading(false);
    } else {
      // Fallback: set loading to false after a timeout
      const timeout = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timeout);
    }
  }, [tvId]);

  useEffect(() => {
    dispatch(resetTvDetail());
    // then fetch new movie detail and trailer
  }, [tvId]);

  useEffect(() => {
    setoverviews(true);
    setclip(false);
    setcaste(false);
    setreviews(false);
    setGallery(false);
    setSimilarRecommended(false);
  }, [tvId]);

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
              {detail.title || detail.original_title|| detail.name}
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
            <div className="flex mt-8 justify-center sm:gap-10 gap-3 text-gray-400 text-[11px] flex-wrap">
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
                  setseason(false);
                }}
              >
                overviews
              </p>
              <p
                className={`cursor-pointer md:text-xl pb-1 ${
                  season ? "border-b-2 border-gray-400" : ""
                }`}
                onClick={() => {
                  setoverviews(false);
                  setclip(false);
                  setcaste(false);
                  setreviews(false);
                  setGallery(false);
                  setSimilarRecommended(false);
                  setseason(true);
                }}
              >
                Seasons
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
                  setseason(false);
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
                  setseason(false);
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
                  setseason(false);
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
                  setseason(false);
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
                  setseason(false);
                }}
              >
                Similar & Recommended
              </p>
            </div>
            <div>
              {overviews && (
                <div className="flex justify-center w-full">
                  <div className="p-4 px-2 w-full  lg:max-w-6xl font-serif my-3 text-gray-200 mx-auto box-border overflow-x-auto max-w-full">
                    <TvOverview tvId={tvId} />
                  </div>
                </div>
              )}
               {season && (
                <div className="flex justify-center w-full">
                  <div className="p-4 px-2 w-full  lg:max-w-6xl font-serif my-3 text-gray-200 mx-auto box-border overflow-x-auto max-w-full">
                    <Seasontv tvId={tvId} playerRef={playerRef}/>
                  </div>
                </div>
              )}
              {clip && (
                <div className="flex justify-center mt-8 w-full">
                  <TvClips playerRef={playerRef} />
                </div>
              )}
              {caste && (
                <div>
                  <TvCaste tvId={tvId} />
                </div>
              )}
              {reviews && <div>{<TvReviews tvId={tvId} />}</div>}
              {gallery && (
                <div>
                  <TvGallery tvId={tvId} />
                </div>
              )}
              {similarRecommended && (
                <div className="mt-8">
                  <TvSimilar tvId={tvId} />
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
