import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthSlice";
import movieReducer from "./MovieSlice";
import gptReducer from "./GptSlice";
import detailReducer from "./DetailMovieSlice";
import tvReducer from "./tvSlice";
import DetailtvReducer from "./tvdetailslice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    details: detailReducer,
    tv: tvReducer,
    tvdetails: DetailtvReducer,
  },
});

export default appStore;