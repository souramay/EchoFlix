import { createSlice } from "@reduxjs/toolkit";
import Mock_NowplayingMovies from "../mock_data/Mock_NowpalyingMovies.json"; 
import Mock_popularMovies from "../mock_data/Mock_PopularMovies.json";
import Mock_TopratedMovies from "../mock_data/Mock_TopRated.json"; 
import Mock_UpcomingMovies from "../mock_data/Mock_UpcomingMovies.json";

export const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    NowplayingMovies: Mock_NowplayingMovies?.results || [],
    videoId: null,
    popularMovies: Mock_popularMovies?.results || [],
    TopratedMovies: Mock_TopratedMovies?.results||[],
    UpcomingMovies: Mock_UpcomingMovies?.results || []
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