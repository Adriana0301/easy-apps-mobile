import axiosInstance from './axiosInstance';

export const getUserInfoRequest = async () => {
  return axiosInstance.get('/users/me');
};

export const updateUserInfoRequest = async (
  username?: string,
  avatar?: string,
) => {
  const formData = new FormData();
  formData.append('username', username);

  if (avatar) {
    const file = {
      uri: avatar,
      type: 'image/jpeg',
      name: 'avatar.jpg',
    };
    formData.append('avatar', file);
  }

  return axiosInstance.put('/users', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteUserAvatarRequest = async () => {
  return axiosInstance.delete('/users/avatar');
};
