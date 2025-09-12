import { createSlice } from "@reduxjs/toolkit";



export const DetailMovieSlice=createSlice({
    name:"detail",
    initialState:{
        detail:null,
        video:null,
        trailer:null,
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
        }
        
    }
})

export const { setDetail,setVideo,setTrailer} = DetailMovieSlice.actions;
export default DetailMovieSlice.reducer;