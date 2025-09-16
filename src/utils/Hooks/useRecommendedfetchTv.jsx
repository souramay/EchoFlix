import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setRecommended } from "../redux/DetailMovieSlice"; // Make sure this exists
import { useEffect } from "react";
import { setTvRecommended } from "../redux/tvdetailslice";

const useRecommendedfetchTv = (movieId) => {
  const dispatch = useDispatch();

  const fetchRecommended = async () => {
    const url = `https://api.themoviedb.org/3/tv/${movieId}/recommendations?language=en-US&page=1`;
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setTvRecommended(data.results || []));
    
  };

  useEffect(() => {
    if (movieId) {
      fetchRecommended();
    }
  }, [movieId]);
};

export default useRecommendedfetchTv;
