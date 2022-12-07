import { configureStore } from '@reduxjs/toolkit';
import searchFocusReducer from './Slices/searchFocusSlice';
import userReducer from './Slices/userSlice';
import postsReducer from './Slices/postSlice';
import { apiSlice } from './Api/apiSlice';

const reduxStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    post: postsReducer,
    searchFocus: searchFocusReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.ENVIRONMENT && true,
});

export default reduxStore;
