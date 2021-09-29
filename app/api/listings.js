import { apiClient } from './client';

const endpoint = '/listings';

/* eslint-disable-next-line */
const getListings = (a, b, c) => apiClient.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('description', listing.description);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);

  listing.images.forEach((image, index) => {
    data.append('images', {
      name: image + index,
      type: 'image/jpeg',
      uri: image,
    });
  });

  if (listing.location) data.append('location', JSON.stringify(listing.location));

  return apiClient.post(endpoint, data, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export const listingsAPI = { getListings, addListing };
