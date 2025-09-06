import { useEffect } from "react"
import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";


const useFetchMovies = (url,storeadd) => {
    const dispatch =useDispatch();
    
      const fetchnowplayingmovies=async()=>{
        
        const response = await fetch(url, options);
        const data = await response.json();
        dispatch(storeadd(data.results));
        // console.log(data);
      }
    
    useEffect( ()=>{
    
      fetchnowplayingmovies();
    },[] );

};

export default useFetchMovies
