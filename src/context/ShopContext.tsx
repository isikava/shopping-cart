import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { PRODUCTS } from '@/data';
import { api } from '@/api';

export type deleteFromCart = (id: number) => void;
export type addToCart = (id: number) => void;
export type updateQuantity = (id: number, newQty: number) => void;

type Context = {
  products: IProduct[];
  cart: ICartItem[];
  subtotal: number;
  cartQty: number;
  addToCart: addToCart;
  deleteFromCart: deleteFromCart;
  updateQuantity: updateQuantity;
};

const ShopContext = createContext<Context>({} as Context);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>(PRODUCTS);
  const [cart, setCart] = useLocalStorage<ICartItem[]>('shopping-cart', []);

  const cartQty = cart.reduce((qty, item) => qty + item.qty, 0);
  const subtotal = cart.reduce((sum, cp) => {
    const item = products.find((p) => p.id === cp.productId);
    return sum + (item?.price || 0) * cp.qty;
  }, 0);

  // useEffect(() => {
  //   let ignore = false;

  //   const getProducts = async () => {
  //     const data = await api.getProducts();
  //     if (!ignore) {
  //       setProducts(data);
  //     }
  //   };

  //   // getProducts();

  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

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

    const updateQuantity = (id: number, newQty: number) => {
      setCart(
        cart.map((cp) => {
          return cp.productId === id ? { ...cp, qty: newQty } : cp;
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

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopState = () => useContext(ShopContext);
