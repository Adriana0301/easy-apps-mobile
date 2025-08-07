import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Alert } from 'react-native';
import { getUserInfoRequest } from '../../axios/userAPI';
import { UserState } from '../../interfaces/user/user';

export const getUserInfoAsyncAction = createAsyncThunk<UserState, void>(
  'user/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserInfoRequest();
      return response.data;
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage =
            error.response?.data?.error || 'Failed to fetch user info';
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage =
            error.response?.data?.errors.join('\n') ||
            'Failed to fetch user info';
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
