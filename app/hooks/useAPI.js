import { useState } from 'react';

export const useAPI = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    try {
      setLoading(true);
      const { data } = await apiFunc(...args);
      setLoading(false);
      setError(false);
      setData(data);
    } catch (err) {
      setLoading(false);
      console.log('Error fetching data: ', err.message);
      setError(true);
    }
  };

  return { request, data, error, loading };
};
