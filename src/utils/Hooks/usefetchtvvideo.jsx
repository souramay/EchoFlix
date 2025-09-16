import { useDispatch } from "react-redux";
import { useEffect } from "react";
import options from "../constants/constantMovie";



const usetvvideo = (movieId, slice) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const url = `https://api.themoviedb.org/3/tv/${movieId}/videos?language=en-US`;

    const fetchVideo = async () => {
      const response = await fetch(url, options);
      const videoData = await response.json();
      dispatch(slice(videoData.results || []));
    };

    fetchVideo();
  }, [movieId, dispatch, slice]);
};

export default usetvvideo;
