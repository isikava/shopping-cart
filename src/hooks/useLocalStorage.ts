import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const readValue = () => {
    const json = localStorage.getItem(key);
    if (json != null) return JSON.parse(json);

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  };

  const [value, setValue] = useState<T>(readValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
