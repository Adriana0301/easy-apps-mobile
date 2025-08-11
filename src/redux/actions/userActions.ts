import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Alert } from 'react-native';
import {
  deleteUserAvatarRequest,
  getUserInfoRequest,
  updateUserInfoRequest,
} from '../../axios/userAPI';
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

export const updateUserInfoAsyncAction = createAsyncThunk(
  'user/updateUserInfo',
  async ({ username, avatar }: UserState, { rejectWithValue }) => {
    try {
      if (!username && !avatar) {
        return rejectWithValue('No data provided');
      }
      const response = await updateUserInfoRequest(username, avatar);
      return response.data;
    } catch (error) {
      let errorMessage = 'An unexpected error occured';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage =
            error.response?.data?.error || 'Failed to update user info';
          console.log(error.response);
        }
        if (error.response?.data?.errors) {
          errorMessage =
            error.response?.data?.errors.join('\n') ||
            'Failed to update user info';
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const deleteUserAvatarAsyncAction = createAsyncThunk(
  'user/deleteUserAvatar',
  async (_, { rejectWithValue }) => {
    try {
      const response = await deleteUserAvatarRequest();
      return response.data;
    } catch (error) {
      let errorMessage = 'An unexpected error occured';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage =
            error.response?.data?.error || 'Failed to update user info';
          console.log(error.response);
        }
        if (error.response?.data?.errors) {
          errorMessage =
            error.response?.data?.errors.join('\n') ||
            'Failed to update user info';
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
