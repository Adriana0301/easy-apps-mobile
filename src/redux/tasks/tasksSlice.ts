import { createSlice } from '@reduxjs/toolkit';
import { TasksState } from '../../interfaces/tasks/tasks';
import { getTasksAsyncAction } from '../actions/tasksActions';

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
        state.tasks = action.payload;
        state.isError = null;
      });
  },
});
export default tasksSlice.reducer;
