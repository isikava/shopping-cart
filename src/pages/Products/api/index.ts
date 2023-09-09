import { PRODUCTS } from '@/data';
import { useFetch } from '@/hooks/useFetch';
import { axios } from '@/lib/axios';

export const getProduct = (id: string): Promise<IProduct> => {
  return axios.get(`/products/${id}`);
};

// export const getProducts = (): Promise<IProduct[]> => {
//   return axios.get('/products?limit=12');
// };

export const getProducts = (): Promise<IProduct[]> => {
  return Promise.resolve(PRODUCTS);
};

export const useProducts = () => {
  return useFetch<IProduct[]>('products', getProducts);
};
