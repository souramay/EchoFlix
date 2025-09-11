import { createSlice } from "@reduxjs/toolkit";



export const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        SearchClicked:true,
        Movies:[],
        MovieSearch:[],
        filterMovies:[],
    },
    reducers:{
        setSearchClicked:(state)=>{
            state.SearchClicked=!state.SearchClicked;
        },
        setMovies:(state,action)=>{
            state.Movies=action.payload;
        },
        setMovieSearch:(state,action)=>{
            state.MovieSearch=action.payload;
        },
        setFilterMovies:(state,action)=>{
            state.filterMovies=action.payload;
        },
        clearGpt:(state)=>{
            state.Movies=[];
            state.MovieSearch=[];
            state.filterMovies=[];
        }
    }
})

export const { setSearchClicked,setMovies ,setMovieSearch,setFilterMovies,clearGpt} = GptSlice.actions;
export default GptSlice.reducer;