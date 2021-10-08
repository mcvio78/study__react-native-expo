import { useState } from 'react';

export const useAPI = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({ isError: false, errorMessage: '' });
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    try {
      setLoading(true);
      const { data } = await apiFunc(...args);
      setLoading(false);
      setError((prevState) => ({ ...prevState, isError: false, errorMessage: '' }));
      setData(() => [...data]);
    } catch (err) {
      setLoading(false);
      setData(() => []);
      setError((prevState) => ({
        ...prevState,
        isError: true,
        errorMessage:
          typeof err !== 'undefined' && err.data && err.data.error ? err.data.error : '',
      }));
    }
  };

  return { request, data, error, loading };
};
