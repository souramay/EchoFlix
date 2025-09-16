
import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setTvCaste } from "../redux/tvdetailslice";
import { useEffect } from "react";


const useFetchTvCaste = (movieId) => {
   const dispatch = useDispatch();

  const fetchCaste = async () => {
    const url = `https://api.themoviedb.org/3/tv/${movieId}/credits?language=en-US`;
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setTvCaste(data.cast || []));
    
  };

  useEffect(() => {
    if (movieId) fetchCaste();
  }, [movieId]);
}

export default useFetchTvCaste;
