import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../Feature/Post/PostSlice";

const store = configureStore({
  reducer: {
    posts: PostReducer,
  },
});

export default store;
