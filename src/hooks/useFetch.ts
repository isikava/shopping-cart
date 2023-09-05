import { useEffect, useState } from 'react';
import { useCache } from '@/context/CacheProvider';

type FetchFunction<T> = () => Promise<T>;

type FetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

export function useFetch<T>(
  key: string,
  fetchFunction: FetchFunction<T>
): FetchResult<T> {
  const { cache, cacheData } = useCache();
  const [data, setData] = useState<T | null>(cache[key] || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!cache[key]) {
          console.log('fetchData');
          const result = await fetchFunction();
          cacheData(key, result);
          if (isMounted) {
            setData(result);
          }
        }
      } catch (error) {
        if (isMounted) {
          setError(error as Error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [key, cache, cacheData, fetchFunction]);

  return { data, isLoading, error };
}
