import axios from 'axios';

import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

export const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});
