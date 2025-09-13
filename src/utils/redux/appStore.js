import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthSlice";
import movieReducer from "./MovieSlice";
import gptReducer from "./GptSlice";
import detailReducer from "./DetailMovieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    details: detailReducer,
  },
});

export default appStore;