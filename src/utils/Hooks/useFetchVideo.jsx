import { useDispatch} from "react-redux";
import { setVideoId } from "../redux/MovieSlice";
import { useEffect } from "react";
import options from "../constants/constantMovie";
import { firstpartVideoUrl } from "../constants/ImgConst";




const useFetchVideo = (movieId,videos) => {
    const dispatch =useDispatch();

    
    
   
    const url = firstpartVideoUrl+ movieId+'/videos';
      const fetchVideo = async () => {
       
        
        const response = await fetch(url,options);
        const videoData = await response.json();
        dispatch(setVideoId(videoData.results));
        
        // console.log(videoData);
      }

    useEffect(() => {
      videos && fetchVideo();
    }, []);
  
}

export default useFetchVideo
