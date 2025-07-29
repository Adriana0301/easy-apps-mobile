import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces/auth/auth';
import { signInAsyncAction, signUpAsyncAction } from '../actions/authActions';

const initialState: AuthState = {
  isLoading: false,
  isError: null,
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signInAsyncAction.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(signInAsyncAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload;
        state.isError = null;
      })
      .addCase(signInAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(signUpAsyncAction.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(signUpAsyncAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload;
        state.isError = null;
      })
      .addCase(signUpAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      });
  },
});

export default authSlice.reducer;
