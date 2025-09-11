import { createSlice } from "@reduxjs/toolkit";



export const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        SearchClicked:true,
        Movies:[],
    },
    reducers:{
        setSearchClicked:(state)=>{
            state.SearchClicked=!state.SearchClicked;
        },
        setMovies:(state,action)=>{
            state.Movies=action.payload;
        }
    }
})

export const { setSearchClicked,setMovies } = GptSlice.actions;
export default GptSlice.reducer;