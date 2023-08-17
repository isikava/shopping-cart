import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import { api } from '@/api';
import { PRODUCTS } from '@/data';

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
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
