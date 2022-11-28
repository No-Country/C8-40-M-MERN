import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../Api/apiSlice';

const initialState = {
  token: null,
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
  },
  extraReducers: (builder) => {
    builder
      // ------------------------- create user promise result
      .addMatcher(apiSlice.endpoints.createUser.matchFulfilled, (state, action) => {
        console.log('create user matchFulfilled', action.payload);

        const { token, savedUser } = action.payload.data;

        sessionStorage.setItem('token', token);
        state.token = token;
        state.userInfo = savedUser;
        state.userId = savedUser.id;
        state.isAuth = true;
      })
      .addMatcher(apiSlice.endpoints.createUser.matchRejected, (state, action) => {
        console.log('create user matchRejected', action);
      })
      // ------------------------- login user promise result
      .addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
        console.log('login user matchFulfilled', action.payload);

        const { token, user } = action.payload.data;

        sessionStorage.setItem('token', token);
        state.token = token;
        state.userInfo = user;
        state.userId = user.id;
        state.isAuth = true;
      })
      .addMatcher(apiSlice.endpoints.loginUser.matchRejected, (state, action) => {})
      // ------------------------- update user promise result
      .addMatcher(apiSlice.endpoints.updateUser.matchFulfilled, (state, action) => {
        console.log('update user matchFulfilled', action.payload);
      })
      .addMatcher(apiSlice.endpoints.updateUser.matchRejected, (state, action) => {
        console.log('update user matchRejected', action.payload);
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
