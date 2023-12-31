import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error(message);
    return Promise.reject(error);
  }
);
