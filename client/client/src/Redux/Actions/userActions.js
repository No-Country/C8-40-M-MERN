import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://c8-40-m-mern-kappa.vercel.app/api';

export const userLogin = createAsyncThunk(
  `${url}/auth/login`,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(`${url}/auth/login`, { email, password }, config);

      // store user's token in local storage
      localStorage.setItem('token', data.data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ userName, email, password, isActive, avatar, role }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${url}/auth/register`,
        { userName, email, password, isActive, avatar, role },
        config
      );
      localStorage.setItem('registerToken', data.data.token);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
