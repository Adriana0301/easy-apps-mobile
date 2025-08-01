import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Alert } from 'react-native';
import { loginRequest, signupRequest } from '../../axios/authApi';
import { LoginPayload, SignUpPayload } from '../../interfaces/auth/auth';

export const signInAsyncAction = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await loginRequest(email, password);
      const token = response.data.accessToken;
      return token;
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error || 'Sign in failed';
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage =
            error.response?.data?.errors.join('\n') || 'Sign in failed';
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const signUpAsyncAction = createAsyncThunk(
  'auth/signUp',
  async (
    { email, name, password, avatar }: SignUpPayload,
    { rejectWithValue },
  ) => {
    try {
      const response = await signupRequest(email, name, password, avatar);
      const token = response.data.accessToken;
      return token;
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error || 'Sign up failed';
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage =
            error.response?.data?.errors.join('\n') || 'Sign up failed';
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
