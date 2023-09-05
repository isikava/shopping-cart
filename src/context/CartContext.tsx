import { ReactNode, createContext, useContext, useMemo } from 'react';
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
  const [cart, setCart] = useLocalStorage<ICartItem[]>('shopping-cart', []);
  const { data: products } = useProducts();

  const cartQty = cart.reduce((qty, item) => qty + item.qty, 0);
  const subtotal = cart.reduce((sum, cp) => {
    const item = products?.find((p) => p.id === cp.productId);
    return sum + (item?.price || 0) * cp.qty;
  }, 0);

  const value = useMemo(() => {
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

    const deleteFromCart = (id: number) => {
      setCart(cart.filter((cp) => cp.productId !== id));
    };

    const updateQuantity = (cartItem: ICartItem) => {
      setCart(
        cart.map((cp) => {
          return cp.productId === cartItem.productId ? cartItem : cp;
        })
      );
    };

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
