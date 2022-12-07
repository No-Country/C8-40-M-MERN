import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin } from '../Actions/userActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const initialState = {
  loading: false,
  token,
  isAuth: false,
  userInfo: null,
  error: false,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.userId = null;
      state.isAuth = false;
      state.userInfo = null;
    },
  },
  extraReducers: {
    //login user
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.data.user;
      state.isAuth = true;
      state.success = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
    //register user
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuth = true;
      state.userInfo = payload;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { logout, setErrorMessage } = userSlice.actions;
export default userSlice.reducer;
