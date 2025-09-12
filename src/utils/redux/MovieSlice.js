import { createSlice } from "@reduxjs/toolkit";


export const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    NowplayingMovies:[],
    videoId: null,
    popularMovies:[],
    TopratedMovies:[],
    UpcomingMovies:[]
  },
  reducers: {
    addMovie: (state, action) => {
      state.NowplayingMovies = action.payload;
    },
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.TopratedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
  },
});

export const { addMovie, setVideoId, addPopularMovies, addTopratedMovies, addUpcomingMovies } = MovieSlice.actions;

export default MovieSlice.reducer;