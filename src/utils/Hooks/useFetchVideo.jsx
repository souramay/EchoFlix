import axios from "axios";
import { useDispatch } from "react-redux";
import { setVideoId } from "../redux/MovieSlice";
import { useEffect } from "react";
import options from "../constants/constantMovie";
import { firstpartVideoUrl } from "../constants/ImgConst";




const useFetchVideo = (movieId) => {
    const dispatch =useDispatch();
   
    const url = firstpartVideoUrl+ movieId+'/videos';
      const fetchVideo = async () => {
        const videoData = await axios.get(url,options);
        dispatch(setVideoId(videoData.data.results));
        // console.log(videoData.data);
      }

    useEffect(() => {
      fetchVideo();
    }, []);
  
}

export default useFetchVideo
