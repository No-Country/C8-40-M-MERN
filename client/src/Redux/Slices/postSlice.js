import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../Api/apiSlice';

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getAllPosts: (state, action) => {
      state.posts = [];
    },
    createPost: (state, action) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
