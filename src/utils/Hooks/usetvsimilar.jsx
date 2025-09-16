import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";

import { useEffect } from "react";
import { setSimilar } from "../redux/DetailMovieSlice";

const usetvsimilar = (movieId) => {
  const dispatch = useDispatch();

  const fetchSimilar = async () => {
     
    const url = `https://api.themoviedb.org/3/tv/${movieId}/similar?language=en-US&page=1`;
   
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setSimilar(data.results || []));
    
  };

  useEffect(() => {
    if (movieId) {
      fetchSimilar();
    }
  }, [movieId]);
};

export default usetvsimilar;
