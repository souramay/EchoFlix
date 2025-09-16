import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setGallery } from "../redux/DetailMovieSlice"; 
import { useEffect } from "react";
import { setTvGallery } from "../redux/tvdetailslice";

const useGallerytvfetch = (movieId) => {
  const dispatch = useDispatch();

  const fetchGallery = async () => {
    const url = `https://api.themoviedb.org/3/tv/${movieId}/images`;
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(setTvGallery(data.backdrops || [])); 
   
    
   
  };

  useEffect(() => {
    if (movieId) {
      fetchGallery();
    }
  }, [movieId]);
};

export default useGallerytvfetch;
