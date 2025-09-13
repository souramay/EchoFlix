import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setGallery } from "../redux/DetailMovieSlice"; 
import { useEffect } from "react";

const useGalleryfetch = (movieId) => {
  const dispatch = useDispatch();

  const fetchGallery = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/images`;
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setGallery(data.backdrops || [])); 
    console.log("Gallery Data:", data);
  };

  useEffect(() => {
    if (movieId) {
      fetchGallery();
    }
  }, [movieId]);
};

export default useGalleryfetch;
