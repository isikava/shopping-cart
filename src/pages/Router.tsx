import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './ErrorPage';
import Home from './Home';
import { Products } from './Products';
import Checkout from './Checkout';
import Components from './Components';
import { Cart } from './Cart';

export const Router = () => {
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
          element: <Products />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
        },
        {
          path: '/components',
          element: <Components />,
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
