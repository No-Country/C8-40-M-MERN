import { createSlice } from '@reduxjs/toolkit';
import { createPost } from '../Actions/postsActions';

const initialState = {
  loading: false,
  success: false,
  error: false,
  resource: null,
  url: null,
  title: null,
  description: null,
  category: null,
  programmingL: null,
  technology: null,
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
      state.resource = payload.resource;
      state.url = payload.url;
      state.title = payload.title;
      state.description = payload.description;
      state.category = payload.category;
      state.programmingL = payload.programmingL;
      state.technology = payload.technology;
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
