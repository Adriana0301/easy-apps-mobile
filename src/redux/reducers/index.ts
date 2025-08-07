import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../auth/authSlice';
import tasksSlice from '../tasks/tasksSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  tasks: tasksSlice,
});

export default rootReducer;
