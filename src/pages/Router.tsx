import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';

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
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
