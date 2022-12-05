import { createSlice } from '@reduxjs/toolkit';
import { createPost } from '../Actions/postsActions';

const initialState = {
  loading: false,
  success: false,
  error: false,
  post: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.post = payload;
      state.success = true; // create post successful
    },
    [createPost.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
