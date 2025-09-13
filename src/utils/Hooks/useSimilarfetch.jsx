import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setSimilar } from "../redux/DetailMovieSlice";
import { useEffect } from "react";

const useSimilarfetch = (movieId) => {
  const dispatch = useDispatch();

  const fetchSimilar = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`;
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setSimilar(data.results || []));
    // console.log("Similar Data:", data);
  };

  useEffect(() => {
    if (movieId) {
      fetchSimilar();
    }
  }, [movieId]);
};

export default useSimilarfetch;
