import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Root from './Root';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Products from './Products';
import Checkout from './Checkout';
import Components from './Components';
import { Cart } from './Cart';

export type getItemQuantity = (id: number) => number;
export type deleteFromCart = (id: number) => void;
export type increaseQuantity = (id: number) => void;
export type decreaseQuantity = (id: number) => void;

export const Router = () => {
  const [cart, setCart] = useLocalStorage<ICartItem[]>('shopping-cart', []);

  const getItemQuantity = (id: number) =>
    cart.find((cp) => cp.id === id)?.qty || 0;

  const deleteFromCart = (id: number) => {
    setCart(cart.filter((cp) => cp.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCart((currCart) => {
      const exist = currCart.find((cp) => cp.id === id);
      if (exist) {
        return currCart.map((cp) => {
          return cp.id === id ? { ...cp, qty: cp.qty + 1 } : cp;
        });
      } else {
        return [...currCart, { id, qty: 1 }];
      }
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((currCart) => {
      const exist = currCart.find((cp) => cp.id === id);
      if (exist?.qty === 1) {
        return currCart.filter((cp) => cp.id !== id);
      } else {
        return currCart.map((cp) =>
          cp.id === id ? { ...cp, qty: cp.qty - 1 } : cp
        );
      }
    });
  };

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
          element: <Products onIncrease={increaseQuantity} />,
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
          element: (
            <Cart
              cart={cart}
              onDeleteFromCart={deleteFromCart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
