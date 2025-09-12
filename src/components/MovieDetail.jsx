import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import useFetchVideo from "../utils/Hooks/useFetchVideo";
import { useEffect, useState } from "react";
import { setTrailer } from "../utils/redux/DetailMovieSlice";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  const videos = useSelector((state) => state.detail.trailer) || [];
  const dispatch = useDispatch();

  useFetchVideo(movieId, setTrailer);

  const [videoplay, setVideoplay] = useState(null);

  useEffect(() => {
    const trailerVideos = videos.filter((video) => video.type === "Trailer");
    const selected =
      trailerVideos.length > 0
        ? trailerVideos[Math.floor(Math.random() * trailerVideos.length)]
        : null;
    setVideoplay(selected);
  }, [videos]);

  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-br from-black via-gray-950 to-gray-900 overflow-x-hidden">
      <Header />
      <div className="px-5 w-full flex justify-center">
        {videoplay && (
          <div className="w-full max-w-3xl aspect-video">
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
        )}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default MovieDetail;
