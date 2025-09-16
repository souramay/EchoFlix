import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";

import { useEffect } from "react";
import { setTvReviews } from "../redux/tvdetailslice";

const useReviewTvfetch = (movieId) => {
  const dispatch = useDispatch();


  const fetchReviews = async (movieId) => {
    const url = `https://api.themoviedb.org/3/tv/${movieId}/reviews?language=en-US&page=1`;
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setTvReviews(data.results || []));
    
  };

  useEffect(() => {
  if (movieId) {
    fetchReviews(movieId);
  }
}, [movieId]);
}

export default useReviewTvfetch;
