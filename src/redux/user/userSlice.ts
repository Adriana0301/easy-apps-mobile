import { createSlice } from '@reduxjs/toolkit';
import { UserRequestState } from '../../interfaces/user/user';
import { getUserInfoAsyncAction } from '../actions/userActions';

const initialState: UserRequestState = {
  isLoading: false,
  isError: null,
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserInfoAsyncAction.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getUserInfoAsyncAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
        state.isError = null;
      })
      .addCase(getUserInfoAsyncAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      });
  },
});
export default userSlice.reducer;
