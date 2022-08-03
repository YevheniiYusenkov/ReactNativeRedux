import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginDto } from '@app/state';
import axios from 'axios';

export const LoginAction = createAsyncThunk(
  'LoginAction',
  async (payload: LoginDto, thunkAPI) => {
    try {
      const result = await axios.post(
        'https://dummyjson.com/auth/login',
        payload,
      );
      return result.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
