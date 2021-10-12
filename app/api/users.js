import { apiClient } from './client';

const endpoint = '/users';

const signUp = (userInfo) => apiClient.post(endpoint, userInfo);

export const usersAPI = { signUp };
