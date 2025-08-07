import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../auth/authSlice';
import tasksSlice from '../tasks/tasksSlice';
import userSlice from '../user/userSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  tasks: tasksSlice,
  user: userSlice,
});

export default rootReducer;
