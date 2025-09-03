import { useSelector } from "react-redux";
import useFetchVideo from "../utils/Hooks/useFetchVideo";

const VideoBack = ({ movieId }) => {
  useFetchVideo(movieId);

  const videos = useSelector((state) => state.movies.videoId) || [];

  // Filter for trailer videos
  const trailerVideos = videos.filter((video) => video.type === "Trailer");

  // Pick a random trailer video if available
  const videoplay =
    trailerVideos.length > 0
      ? trailerVideos[Math.floor(Math.random() * trailerVideos.length)]
      : null;

  return (
    <div>
      {videoplay ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoplay.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`}
          title="Teaser Video"
          frameBorder="0"
        />
      ) : (
        <p>No teaser video available</p>
      )}
    </div>
  );
};

export default VideoBack;
