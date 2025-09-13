import { useDispatch} from "react-redux";
import { useEffect } from "react";
import options from "../constants/constantMovie";
import { firstpartVideoUrl } from "../constants/ImgConst";




const useFetchVideo = (movieId,slice) => {
    const dispatch =useDispatch();

    
    
   
    const url = firstpartVideoUrl+ movieId+'/videos';
      const fetchVideo = async () => {
       
        
        const response = await fetch(url,options);
        const videoData = await response.json();
        dispatch(slice(videoData.results));
        
        // console.log(videoData);
      }

    useEffect(() => {
      fetchVideo();
    }, []);
  
}

export default useFetchVideo
