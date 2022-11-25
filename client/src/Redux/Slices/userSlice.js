import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../Api/apiSlice';

const initialState = {
  userId: null,
  isAuth: false,
  userInfo: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem('token');
      state.userId = null;
      state.isAuth = false;
      state.userInfo = {};
    },
    checkAuth: (state, action) => {
      console.log(action.payload);
      if (action.payload !== null) state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(apiSlice.endpoints.loginUser.matchPending, (state, action) => {})
      .addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
        const { token, user } = action.payload.data;
        state.isAuth = true;
        state.userId = user.id;
        state.userInfo = user;
        sessionStorage.setItem('token', token);
      })
      .addMatcher(apiSlice.endpoints.loginUser.matchRejected, (state, action) => {});
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
