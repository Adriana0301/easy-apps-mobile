import axiosInstance from './axiosInstance';

export const tasksRequest = async () => {
  return axiosInstance.get('/tasks');
};

export const taskByIdRequest = async (id: string) => {
  return axiosInstance.get(`/tasks/${id}`);
};

export const tasksCreateRequest = async (
  title: string,
  description: string,
  files?: string,
) => {
  const formData = new FormData();

  formData.append('title', title);
  formData.append('description', description);
  if (files) {
    const file = {
      uri: files,
      type: 'image/jpeg',
      name: 'avatar.jpg',
    };
    formData.append('files', file);
  }

  return axiosInstance.post('/tasks', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const taskDeleteRequest = (id: string) => {
  return axiosInstance.delete(`/tasks/${id}`);
};
