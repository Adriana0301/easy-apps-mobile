import axiosInstance from './axiosInstance';

export const tasksRequest = async () => {
  return axiosInstance.get('/tasks');
};

export const taskByIdRequest = async (id: string) => {
  return axiosInstance.get(`/tasks/${id}`);
};

export const tasksCreateRequest = async (
  title: string,
  description?: string,
  files?: string[],
) => {
  const formData = new FormData();

  formData.append('title', title);
  if (description) {
    formData.append('description', description);
  }
  if (files?.length) {
    for (let i = 0; i < files.length; i++) {
      const file = {
        uri: files[i],
        type: 'image/jpeg',
        name: 'avatar.jpg',
      };
      formData.append('files', file);
    }
  }

  return axiosInstance.post('/tasks', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const taskDeleteRequest = async (id: string) => {
  return axiosInstance.delete(`/tasks/${id}`);
};

export const changeTaskStatusRequest = (id: string, done: boolean) => {
  const formData = new FormData();

  formData.append('done', String(done));

  return axiosInstance.patch(`/tasks/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const allTasksRequest = async (page: number, tasksPerPage: number) => {
  return axiosInstance.get('/tasks/all', {
    params: {
      page,
      tasksPerPage,
    },
  });
};

export const editTaskInfo = (
  id: string,
  done: boolean,
  title: string,
  description?: string,
  files?: string[],
) => {
  const formData = new FormData();

  if (title) {
    formData.append('title', title);
  }
  if (description) {
    formData.append('description', description);
  }
  if (files?.length) {
    for (let i = 0; i < files.length; i++) {
      const file = {
        uri: files[i],
        type: 'image/jpeg',
        name: 'avatar.jpg',
      };
      formData.append('files', file);
    }
  }
  if (done !== undefined) {
    formData.append('done', done);
  }

  return axiosInstance.put(`/tasks/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteFileRequest = (id: string, url: string) => {
  return axiosInstance.put(`/tasks/${id}/files`, { url });
};
