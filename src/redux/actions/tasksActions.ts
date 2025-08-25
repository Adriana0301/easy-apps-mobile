import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { Alert } from 'react-native';
import {
  allTasksRequest,
  changeTaskStatusRequest,
  deleteFileRequest,
  editTaskInfo,
  taskByIdRequest,
  taskDeleteRequest,
  tasksCreateRequest,
  tasksRequest,
} from '../../axios/tasksApi';
import {
  AllTasksParams,
  StatusPayload,
  TasksPayload,
} from '../../interfaces/tasks/tasks';

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
  async (_id: string, { rejectWithValue }) => {
    try {
      const { data } = await taskByIdRequest(_id);

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
      const { data } = await tasksCreateRequest(title, description, files);
      dispatch(getTasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
      return data;
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
  '/task/:id',
  async (_id: string, { rejectWithValue, dispatch }) => {
    try {
      await taskDeleteRequest(_id);
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

export const changeTaskStatusAsyncAction = createAsyncThunk(
  'task/:id',
  async ({ _id, done }: StatusPayload, { rejectWithValue, dispatch }) => {
    try {
      await changeTaskStatusRequest(String(_id), Boolean(done));
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

export const allTasksAsyncAction = createAsyncThunk(
  'tasks/all',
  async ({ page, tasksPerPage }: AllTasksParams, { rejectWithValue }) => {
    try {
      const { data } = await allTasksRequest(page, tasksPerPage);
      console.log('render', data);
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

export const editTaskAsyncAction = createAsyncThunk(
  'task/updateTaskInfo',
  async (
    {
      id,
      done,
      title,
      description,
      files,
    }: {
      id: string;
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
  async ({ id, file }: { id: string; file: string }, { rejectWithValue }) => {
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
