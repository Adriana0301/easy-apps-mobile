import axiosInstance from './axiosInstance';

export const tasksRequest = async () => {
  return axiosInstance.get('/tasks');
};
