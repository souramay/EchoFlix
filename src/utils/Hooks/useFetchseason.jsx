import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import {  setTvSeason } from "../redux/tvdetailslice";
import { useEffect } from "react";


const useFetchseason = (movieId,season_number) => {
   const dispatch = useDispatch();

  const fetchCaste = async () => {
    const url = `https://api.themoviedb.org/3/tv/${movieId}/season/${season_number}?language=en-US`;
    
    const response = await fetch(url, options);
    const data = await response.json();
    
    dispatch(setTvSeason(data));
    
    
  };

  useEffect(() => {
    if (movieId && season_number) fetchCaste();
  }, [movieId, season_number]);
}

export default useFetchseason;
