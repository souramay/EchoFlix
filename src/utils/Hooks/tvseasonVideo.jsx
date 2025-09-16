import { useEffect } from "react";
import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setTvseasomvideo } from "../redux/tvdetailslice";

const useTvSeasonVideo = (tvId, seasonNumber, episodeNumber) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Guard: don't fetch if any param is missing or falsy
    if (!tvId || !seasonNumber || !episodeNumber) return;

    const url = `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/videos?language=en-US`;
   

    const fetchSeasonVideo = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        dispatch(setTvseasomvideo(data));
      
      } catch (error) {
        console.error("Failed to fetch season video", error);
      }
    };

    fetchSeasonVideo();
  }, [tvId, seasonNumber, episodeNumber, dispatch]);
};

export default useTvSeasonVideo;
