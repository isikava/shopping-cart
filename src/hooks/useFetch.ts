import { useState, useEffect, useCallback } from 'react';

type FetchFunction<T> = () => Promise<T>;

export function useFetch<T>(fetchFunction: FetchFunction<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    console.log('fetching');

    try {
      const result = await fetchFunction();
      setData(result);
    } catch (err: any) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading, refetch: fetchData };
}
