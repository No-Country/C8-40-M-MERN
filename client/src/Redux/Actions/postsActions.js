import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const URI = 'https://c8-40-m-mern-kappa.vercel.app/api';

export const createPost = createAsyncThunk(
  '/posts',
  async (
    { resource, url, title, description, category, programmingL, technology },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await axios.post(
        `${URI}/posts`,
        { resource, title, url, description, category, programmingL, technology },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
