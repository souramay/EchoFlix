import { useSelector } from "react-redux";
import useFetchVideo from "../utils/Hooks/useFetchVideo";
import { useEffect, useState } from "react";
import {  movieImageUrlforbackground } from "../utils/constants/ImgConst";

const VideoBack = ({ movieId, movieImg }) => {
  

  const videos = useSelector((state) => state.movies.videoId) || [];
  const [videoplay, setVideoplay] = useState(null);

  useFetchVideo(movieId,videos);

  // Filter for trailer videos
  const trailerVideos = videos.filter((video) => video.type === "Trailer");

  // Pick a random trailer video if available
  useEffect(() => {
    const videoplay =
      trailerVideos.length > 0
        ? trailerVideos[Math.floor(Math.random() * trailerVideos.length)]
        : null;
    setVideoplay(videoplay);
  }, [trailerVideos]);

  return (
    <div className=" from-black fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      <img
        src={movieImageUrlforbackground + movieImg}
        alt="No Video"
        className="w-[200%] h-screen object-cover pointer-events-none"
        style={{ filter: "contrast(1.2) brightness(1.05)" }}
      />
      {videoplay && (
        <iframe
          className="absolute top-1/2 left-1/2 w-[200%] h-[200%] min-w-[1280px] min-h-[720px] -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${videoplay.key}?autoplay=1&mute=1&controls=0&color=white&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&loop=1&playlist=${videoplay.key}`}
          title="Teaser Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoBack;
