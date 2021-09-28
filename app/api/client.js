import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://192.168.1.15:9000/api',
  timeout: 5000,
});
