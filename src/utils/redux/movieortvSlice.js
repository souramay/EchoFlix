import { createSlice } from "@reduxjs/toolkit";



const movieortvSlice=createSlice({
  name:"movieortv",
  initialState:{
    isMovie:"movie"
  },
  reducers:{
    setMovieortv:(state,action)=>{
        state.isMovie=action.payload
    }
  }
})
export const {setMovieortv}=movieortvSlice.actions
export default movieortvSlice.reducer