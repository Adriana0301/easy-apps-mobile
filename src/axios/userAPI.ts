import axiosInstance from './axiosInstance';

export const getUserInfoRequest = async () => {
  return axiosInstance.get('/users/me');
};
