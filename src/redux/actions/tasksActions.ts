import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Alert } from 'react-native';
import {
  deleteFileRequest,
  editTaskInfo,
  taskByIdRequest,
  taskDeleteRequest,
  tasksCreateRequest,
  tasksRequest,
} from '../../axios/tasksApi';
import { TasksPayload } from '../../interfaces/tasks/tasks';

export const getTasksAsyncAction = createAsyncThunk(
  'tasks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await tasksRequest();
      return data;
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join('\n');
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const getTaskByIdAsyncAction = createAsyncThunk(
  '/tasks/:id',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await taskByIdRequest(id);
      return data;
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join('\n');
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const createTaskAsyncAction = createAsyncThunk(
  '/tasks',
  async (
    { title, description, files, onSuccess }: TasksPayload,
    { rejectWithValue, dispatch },
  ) => {
    try {
      await tasksCreateRequest(title, description, files);
      dispatch(getTasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join('\n');
          console.log('errorMessage', errorMessage);
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      console.log(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const deleteTaskAsyncAction = createAsyncThunk(
  'task/:id',
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      await taskDeleteRequest(id);
      dispatch(getTasksAsyncAction());
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join('\n');
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const editTaskAsyncAction = createAsyncThunk(
  'task/updateTaskInfor',
  async (
    {
      id,
      done,
      title,
      description,
      files,
    }: {
      id: number;
      done: boolean;
      title: string;
      description?: string;
      files?: string[];
    },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const response = await editTaskInfo(id, done, title, description, files);
      dispatch(getTasksAsyncAction());
      return response.data;
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join('\n');
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const deleteFileAsyncAction = createAsyncThunk(
  'task/deleteFile',
  async ({ id, file }: { id: number; file: string }, { rejectWithValue }) => {
    try {
      const response = await deleteFileRequest(id, file);
      return response.data;
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (isAxiosError(error)) {
        if (error.response?.data?.error) {
          errorMessage = error.response?.data?.error;
          console.log(error.response);
        } else if (error.response?.data?.errors) {
          errorMessage = error.response?.data?.errors.join('\n');
          console.log(error.response);
        }
      }
      Alert.alert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
