import { apiClient } from './client';

const endpoint = '/auth';

const login = (email, password) => apiClient.post(endpoint, { email, password });

export const authAPI = { login };
