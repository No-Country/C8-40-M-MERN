import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://c8-40-m-mern-kappa.vercel.app/api';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ userName, email, password, isActive, avatar, role }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const data = await axios.post(
        `${url}/auth/register`,
        { userName, email, password, isActive, avatar, role },
        config
      );
      // if (data) {
      //   alert(data.message);
      // }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
