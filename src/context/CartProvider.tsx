import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useProducts } from '@/pages/Products/api';

export type AddToCart = (id: number) => void;
export type DeleteFromCart = (id: number) => void;
export type UpdateQuantity = (cartItem: ICartItem) => void;

type Context = {
  products: IProduct[] | null;
  cart: ICartItem[];
  subtotal: number;
  cartQty: number;
  addToCart: AddToCart;
  deleteFromCart: DeleteFromCart;
  updateQuantity: UpdateQuantity;
};

const CartContext = createContext<Context>({} as Context);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { data: products } = useProducts();
  const [cart, setCart] = useLocalStorage<ICartItem[]>('shopping-cart', []);

  const cartQty = cart.reduce((qty, item) => qty + item.qty, 0);
  const subtotal = cart.reduce((sum, cp) => {
    const item = products?.find((p) => p.id === cp.productId);
    return sum + (item?.price || 0) * cp.qty;
  }, 0);

  const addToCart = useCallback((productId: number) => {
    setCart((prevCart) => {
      const exist = prevCart.find((cp) => cp.productId === productId);
      if (exist) {
        return prevCart.map((cp) => {
          return cp.productId === productId ? { ...cp, qty: cp.qty + 1 } : cp;
        });
      } else {
        return [...prevCart, { productId, qty: 1 }];
      }
    });
  }, []);

  const deleteFromCart = useCallback((id: number) => {
    setCart((prevCart) => prevCart.filter((cp) => cp.productId !== id));
  }, []);

  const updateQuantity = useCallback((cartItem: ICartItem) => {
    setCart((prevCart) =>
      prevCart.map((cp) =>
        cp.productId === cartItem.productId ? cartItem : cp
      )
    );
  }, []);

  const value = useMemo(() => {
    return {
      products,
      cart,
      cartQty,
      subtotal,
      addToCart,
      deleteFromCart,
      updateQuantity,
    };
  }, [products, cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartState = () => useContext(CartContext);
