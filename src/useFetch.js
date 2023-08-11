import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setError('Error fetching data');
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
