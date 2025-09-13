import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setRecommended } from "../redux/DetailMovieSlice"; // Make sure this exists
import { useEffect } from "react";

const useRecommendedfetch = (movieId) => {
  const dispatch = useDispatch();

  const fetchRecommended = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`;
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setRecommended(data.results || []));
    // console.log("Recommended Data:", data);
  };

  useEffect(() => {
    if (movieId) {
      fetchRecommended();
    }
  }, [movieId]);
};

export default useRecommendedfetch;
