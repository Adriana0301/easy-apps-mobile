import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Alert } from 'react-native';
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
      let errorMessage = "An unexpected error occurred";
      if (isAxiosError(error)) {
        errorMessage = error.response?.data?.error || "Login failed";
      }
      Alert.alert("Error", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
