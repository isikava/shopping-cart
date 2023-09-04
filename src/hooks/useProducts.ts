import { useEffect, useState } from 'react';
import { getProducts } from '@/pages/Products/api';
// import { PRODUCTS } from '@/data';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const data = await getProducts();
        if (!ignore) {
          setProducts(data);
        }
      } catch (err) {
        setError('Fakestore API is lagging 😪 Try again later');
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => {
      ignore = true;
    };
  }, []);

  return { products, isLoading, error, setProducts };
};
