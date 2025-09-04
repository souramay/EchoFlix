import axios from "axios";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/MovieSlice";
import options from "../constants/constantMovie";
import { NowPlayingurl } from "../constants/ImgConst";


const useNowPlayingMovies = () => {
    const dispatch =useDispatch();
    
      const fetchnowplayingmovies=async()=>{
        
        const nowPlayingMovies = await axios.get(NowPlayingurl,options);
        dispatch(addMovie(nowPlayingMovies.data.results));
        // console.log(nowPlayingMovies.data);
      }
    
    useEffect( ()=>{
    
      fetchnowplayingmovies();
    },[]);

};

export default useNowPlayingMovies
