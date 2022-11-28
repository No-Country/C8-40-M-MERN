import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../Api/apiSlice';

const initialState = {
  newPost: [],
  userPosts: [],
  allPosts: [],
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
  extraReducers: (builder) => {
    builder
      // ------------------------- get all posts promise result
      .addMatcher(apiSlice.endpoints.getAllPosts.matchFulfilled, (state, action) => {
        console.log('get all posts matchFulfilled', action.payload);
      })
      .addMatcher(apiSlice.endpoints.getAllPosts.matchRejected, (state, action) => {
        console.log('get all posts matchRejected', action.payload);
      })
      // ------------------------- add new post user promise result
      .addMatcher(apiSlice.endpoints.addNewPost.matchFulfilled, (state, action) => {
        console.log('add new post matchFulfilled', action.payload);
      })
      .addMatcher(apiSlice.endpoints.addNewPost.matchRejected, (state, action) => {
        console.log('add new post matchRejected', action.payload);
      })
      // ------------------------- update posts promise result
      .addMatcher(apiSlice.endpoints.updatePost.matchFulfilled, (state, action) => {
        console.log('update posts matchFulfilled', action.payload);
      })
      .addMatcher(apiSlice.endpoints.updatePost.matchRejected, (state, action) => {
        console.log('get all posts matchRejected', action.payload);
      });
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
