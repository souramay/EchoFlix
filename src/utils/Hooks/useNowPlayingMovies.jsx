import axios from "axios";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/MovieSlice";
import options from "../constantMovie";

const useNowPlayingMovies = () => {
    const dispatch =useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      const fetchnowplayingmovies=async()=>{
        
        const nowPlayingMovies = await axios.get(url,options);
        dispatch(addMovie(nowPlayingMovies.data.results));
        console.log(nowPlayingMovies.data);
      }
    
    useEffect( ()=>{
    
      fetchnowplayingmovies();
    },[]);

};

export default useNowPlayingMovies
