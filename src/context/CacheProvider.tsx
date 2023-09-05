import {
  ReactNode,
  createContext,
  useContext,
  useRef,
  useCallback,
} from 'react';

type CacheData = Record<string, any>;

type CacheContextType = {
  cache: CacheData;
  cacheData: (key: string, data: any) => void;
};

const CacheContext = createContext<CacheContextType | undefined>(undefined);

export function CacheProvider({ children }: { children: ReactNode }) {
  const cacheRef = useRef<CacheData>({});
  const cacheData = useCallback((key: string, data: any) => {
    cacheRef.current[key] = data;
  }, []);

  const value = {
    cache: cacheRef.current,
    cacheData,
  };

  return (
    <CacheContext.Provider value={value}>{children}</CacheContext.Provider>
  );
}

export const useCache = () => {
  const context = useContext(CacheContext);
  if (!context) {
    throw new Error('useCache must be used within a CacheProvider');
  }
  return context;
};
