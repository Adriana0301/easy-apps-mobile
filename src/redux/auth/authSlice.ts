import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces/auth/auth";

const initialState: AuthState  ={
    isLoading: false,
    isError: null,
    accessToken: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setToken: (state, action) => {
            state.accessToken = action.payload;
            state.isLoading = false;
            state.isError = null;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload; 
        },
        setError: (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        },

    }

});

export default authSlice.reducer;