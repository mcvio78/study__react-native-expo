import axios from 'axios';

import getEnvVars from '../../environment';
import { cache } from '../utility/cache';

const { apiUrl, mode } = getEnvVars();

export const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 3000,
});

if (mode === 'development') {
  // Add a request interceptor
  apiClient.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
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
      // outside 2xx
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
    if (error === undefined) alert('USING CACHE: \nwrong endpoint or server turned off');
    else if (error.status) alert(`USING CACHE: \nError fetching, status code: ${error.status}`);

    const data = await cache.get(url);
    return data ? { status: 200, data: data } : error;
  }
};
