import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setReviews } from "../redux/DetailMovieSlice";
import { useEffect } from "react";

const useReviewfetch = (movieId) => {
 const dispatch = useDispatch();


  const fetchReviews = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setReviews(data.results || []));
    // console.log("Review Data:", data);
  };

  useEffect(() => {
  if (movieId) {
    fetchReviews(movieId);
  }
}, [movieId]);
}

export default useReviewfetch
