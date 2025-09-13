import { useEffect } from "react";
import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setCaste } from "../redux/DetailMovieSlice";

// Usage: useFetchCaste(movieId, storeadd)
const useFetchCaste = (movieId) => {
  const dispatch = useDispatch();

  const fetchCaste = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setCaste(data.cast || []));
    console.log("Caste Data:", data);
  };

  useEffect(() => {
    if (movieId) fetchCaste();
  }, [movieId]);
};

export default useFetchCaste;

