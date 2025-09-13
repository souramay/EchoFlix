import { createSlice } from "@reduxjs/toolkit";



export const DetailMovieSlice=createSlice({
    name:"details",
    initialState:{
        detail:null,
        video:null,
        trailer:null,
        videoplay:null,
        videodetails:[],
        caste:null,
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
        }
        
    }
})

export const { setDetail,setVideo,setTrailer,setVideoplay,setVideodetails,setCaste} = DetailMovieSlice.actions;
export default DetailMovieSlice.reducer;