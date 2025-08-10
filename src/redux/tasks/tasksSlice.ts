import { createSlice } from '@reduxjs/toolkit';
import { TasksState } from '../../interfaces/tasks/tasks';
import {
  createTaskAsyncAction,
  deleteTaskAsyncAction,
  getTaskByIdAsyncAction,
  getTasksAsyncAction,
} from '../actions/tasksActions';

const initialState: TasksState = {
  isLoading: false,
  isError: null,
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTasksAsyncAction.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getTasksAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(getTasksAsyncAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload.tasks;
        state.isError = null;
      })
      .addCase(getTaskByIdAsyncAction.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createTaskAsyncAction.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createTaskAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(deleteTaskAsyncAction.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteTaskAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(deleteTaskAsyncAction.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => {
          return task.id !== action.payload.tasks;
        });
      });
  },
});
export default tasksSlice.reducer;
