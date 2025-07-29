import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { loginRequest } from '../../axios/authApi';
import { LoginPayload } from '../../interfaces/auth/auth';


export const signInAsyncAction = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await loginRequest(email, password);
      const token = response.data.accessToken;
      console.log('Token received:', token);
      return token;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Login failed";
        return rejectWithValue(errorMessage);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);
