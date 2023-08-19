import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Products from './Products';
import Checkout from './Checkout';
import { api } from '@/api';
import { PRODUCTS } from '@/data';
import Components from './Components';

export const Router = () => {
  const [products, setProducts] = useState<IProduct[]>(PRODUCTS);

  useEffect(() => {
    let ignore = false;

    const getProducts = async () => {
      const data = await api.getProducts();
      if (!ignore) {
        setProducts(data);
      }
    };

    // getProducts();

    return () => {
      ignore = true;
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products products={products} />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
        },
        {
          path: '/components',
          element: <Components />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
