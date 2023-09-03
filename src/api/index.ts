import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

const getProducts = async (): Promise<IProduct[]> => {
  try {
    console.log('fetching');
    const { data } = await instance.get('/products?limit=12');
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err);
      throw err.response?.data;
    } else {
      console.error(err);
      throw 'Error get products';
    }
  }
};

export const api = {
  getProducts,
};
