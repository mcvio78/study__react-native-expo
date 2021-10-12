import axios from 'axios';

import getEnvVars from '../../environment';
import { cache } from '../utility/cache';
import { authStorage } from '../auth/storage';

const { apiUrl, mode } = getEnvVars();

export const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 3000,
});

if (mode === 'development') {
  // Add a request interceptor
  apiClient.interceptors.request.use(
    async (config) => {
      const token = await authStorage.getToken();
      if (token) config.headers = { 'x-auth-token': token };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  apiClient.interceptors.response.use(
    function (response) {
      // within 2xx
      return response;
    },
    function (error) {
      // other than 2xx
      return Promise.reject(error.response);
    },
  );
}

const get = apiClient.get;

apiClient.get = async (url, params) => {
  try {
    const response = await get(url, params);

    if (response.status >= 200 && response.status < 300) {
      await cache.store(url, response.data);
      return response;
    }
  } catch (error) {
    if (error === undefined) {
      console.log('USING CACHE: \nwrong endpoint or server turned off');
    } else if (error.status) {
      console.log(`USING CACHE: \nError fetching, status code: ${error.status}`);
    }

    const data = await cache.get(url);
    return data ? { status: 200, data: data } : error;
  }
};
