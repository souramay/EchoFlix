import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;