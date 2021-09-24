import { apiClient } from './client';

const endpoint = '/listings';

const getListings = () => apiClient.get(endpoint);

export const listingsAPI = { getListings };
