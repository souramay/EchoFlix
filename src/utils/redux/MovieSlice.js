import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    initialState: [],
    videoId: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.initialState = action.payload;
    },
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },
  },
});

export const { addMovie, setVideoId } = MovieSlice.actions;

export default MovieSlice.reducer;