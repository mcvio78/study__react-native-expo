import { apiClient } from './client';

const endpoint = '/my/listings';

const getListings = () => apiClient.get(endpoint);

export const myListingsAPI = { getListings };
