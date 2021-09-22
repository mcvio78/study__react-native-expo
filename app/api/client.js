import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://192.168.1.3:9000/api',
  timeout: 1000,
});
