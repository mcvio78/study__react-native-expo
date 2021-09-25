import { apiClient } from './client';

const endpoint = '/listings';
/* eslint-disable-next-line */
const getListings = (a, b, c) => apiClient.get(endpoint);

export const listingsAPI = { getListings };
