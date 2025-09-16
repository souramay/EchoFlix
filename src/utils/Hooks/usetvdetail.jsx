import { useEffect } from "react"
import { useDispatch } from "react-redux";
import options from "../constants/constantMovie";
import { setDetail } from "../redux/DetailMovieSlice";


const usetvdetail = (id) => {
    
    const url = 'https://api.themoviedb.org/3/tv/' + id + '?language=en-US';

    
    const dispatch =useDispatch();
    
    
      const fetchnowplayingmovies=async()=>{
        
        const response = await fetch(url, options);
        const data = await response.json();
        dispatch(setDetail(data));
       
      }
    
    useEffect(() => {
      fetchnowplayingmovies();
    }, []);

};

export default usetvdetail;
