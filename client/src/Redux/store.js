import { configureStore } from '@reduxjs/toolkit';

import userReducer from './Slices/userSlice';
import { apiSlice } from './Api/apiSlice';

const reduxStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.ENVIRONMENT && true,
});

export default reduxStore;
