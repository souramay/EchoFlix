import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import options from '../constants/constantMovie';


const usefetchtvVideo = (movieId,slice) => {
  const dispatch =useDispatch();
  
  

    
    
   
    const url = 'https://api.themoviedb.org/3/tv/'+ movieId+'/videos?language=en-US';
    
      const fetchVideo = async () => {
       
        
        const response = await fetch(url,options);
        const videoData = await response.json();
       
       
        dispatch(slice(videoData.results));

        
        
      }

    useEffect(() => {
      fetchVideo();
    }, [movieId]);
}

export default usefetchtvVideo
