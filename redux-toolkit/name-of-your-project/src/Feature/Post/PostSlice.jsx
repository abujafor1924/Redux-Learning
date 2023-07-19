import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fatchPosts = createAsyncThunk("posts/fatchPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    isloading: false,
    poats: [],
    error: null,
  },
  extraReducer: (builder) => {
    builder.addCase(fatchPosts.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fatchPosts.fulfilled, (state, action) => {
      state.isloading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fatchPosts.rejected, (state, action) => {
      state.isloading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
