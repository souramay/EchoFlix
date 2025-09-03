import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthSlice";
import movieReducer from "./MovieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer
  },
});

export default appStore;