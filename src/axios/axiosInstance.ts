import axios from 'axios';
import { BASE_URL } from '../constants';
import { logout } from '../redux/auth/authSlice';
import store, { dispatch } from '../redux/store';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(config => {
  const state = store.getState();
  const accessToken = state.auth.accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      dispatch(logout());
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
