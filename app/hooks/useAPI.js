import { useState } from 'react';

export const useAPI = (apiFunc) => {
  const [data, setData] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    try {
      setLoading(true);
      const response = await apiFunc(...args);
      setLoading(false);
      setError(false);
      setData(response.data);
      return response;
    } catch (err) {
      setLoading(false);
      setData('');
      setError(true);
      return err;
    }
  };

  return { request, data, error, loading };
};
