import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Root from './Root';
import ErrorPage from './ErrorPage';
import Home from './Home';
import { Products } from './Products';
import Checkout from './Checkout';
import Components from './Components';
import { Cart } from './Cart';

export type deleteFromCart = (id: number) => void;
export type addToCart = (id: number) => void;
export type updateQuantity = (id: number, newQty: number) => void;

export const Router = () => {
  const [cart, setCart] = useLocalStorage<ICartItem[]>('shopping-cart', []);

  const deleteFromCart = (id: number) => {
    setCart(cart.filter((cp) => cp.productId !== id));
  };

  const updateQuantity = (id: number, newQty: number) => {
    setCart(
      cart.map((cp) => {
        return cp.productId === id ? { ...cp, qty: newQty } : cp;
      })
    );
  };

  const addToCart = (productId: number) => {
    setCart((currCart) => {
      const exist = currCart.find((cp) => cp.productId === productId);
      if (exist) {
        return currCart.map((cp) => {
          return cp.productId === productId ? { ...cp, qty: cp.qty + 1 } : cp;
        });
      } else {
        return [...currCart, { productId, qty: 1 }];
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
          element: <Products onAddToCart={addToCart} />,
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
              onUpdateQuantity={updateQuantity}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
