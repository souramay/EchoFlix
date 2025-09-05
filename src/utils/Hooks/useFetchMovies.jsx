import axios from "axios";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";


const useFetchMovies = (url,storeadd) => {
    const dispatch =useDispatch();
    
      const fetchnowplayingmovies=async()=>{
        
        const nowPlayingMovies = await axios.get(url,options);
        dispatch(storeadd(nowPlayingMovies.data.results));
        // console.log(nowPlayingMovies.data);
      }
    
    useEffect( ()=>{
    
      fetchnowplayingmovies();
    },[]);

};

export default useFetchMovies
