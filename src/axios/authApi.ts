import axiosInstance from "./axiosInstance";

export const loginRequest = async(email: string, password: string) => {
    return axiosInstance.post('/auth/login', {email, password});
}

export const signupRequest = async(email: string, name: string, password: string, avatar?: string) => {
    const formData  = new FormData();
    formData.append('avatar', avatar);
    formData.append('email', email);
    formData.append('name', name);
    formData.append('password', password);
    
    if (avatar) {
        const file={
            uri: avatar,
            type: 'image/jpeg',
            name: 'avatar.jpg', 
        }
        formData.append('avatar', file);
    }
    
    return axiosInstance.post('/auth/register', formData, {headers:{
        'Content-Type': 'multipart/form-data',
    }});
}