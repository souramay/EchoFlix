import { useEffect } from "react";
import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setCaste } from "../redux/DetailMovieSlice";

// Usage: usetvcaste(movieId, storeadd)
const usetvcaste = (movieId) => {
  const dispatch = useDispatch();

  const fetchCaste = async () => {
    const url = `https://api.themoviedb.org/3/tv/${movieId}/credits?language=en-US`;
    
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setCaste(data.cast || []));
    
  };

  useEffect(() => {
    if (movieId) fetchCaste();
  }, [movieId]);
};

export default usetvcaste;

