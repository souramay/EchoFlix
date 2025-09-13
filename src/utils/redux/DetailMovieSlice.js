import { createSlice } from "@reduxjs/toolkit";
import Similar from "../../components/Similar";



export const DetailMovieSlice=createSlice({
    name:"details",
    initialState:{
        detail:null,
        video:null,
        trailer:null,
        videoplay:null,
        videodetails:[],
        caste:null,
        Reviews:null,
        Gallery:null,
        Similar:null,
        Recommended:null,
    },
    reducers:{
        setDetail:(state,action)=>{
            state.detail=action.payload;
        },
        setVideo:(state,action)=>{
            state.video=action.payload;
        },
        setTrailer:(state,action)=>{
            state.trailer=action.payload;
        },
        setVideoplay:(state,action)=>{
            state.videoplay=action.payload;
        },
        setVideodetails:(state,action)=>{
            state.videodetails=action.payload;
        },
        setCaste:(state,action)=>{
            state.caste=action.payload;
        }, 
        setReviews:(state,action)=>{
            state.Reviews=action.payload;
        },
        setGallery:(state,action)=>{
            state.Gallery=action.payload;
        },
        setSimilar:(state,action)=>{
            state.Similar=action.payload;
        },
        setRecommended:(state,action)=>{
            state.Recommended=action.payload;
        },
        resetDetail: (state) => {
            state.detail = {};
            state.trailer = [];
            
          }
        
    }
})

export const { setDetail,setVideo,setTrailer,setVideoplay,setVideodetails,setCaste,setReviews,setGallery,setSimilar,setRecommended,resetDetail} = DetailMovieSlice.actions;
export default DetailMovieSlice.reducer;