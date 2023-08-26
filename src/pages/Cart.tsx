import React from 'react';
import { deleteFromCart, increaseQuantity, decreaseQuantity } from './Router';
import { Button, Box } from '@chakra-ui/react';
import { PRODUCTS, PRODUCTS_WOMEN } from '@/data';

type Props = {
  cart: ICartItem[];
  onDeleteFromCart: deleteFromCart;
  onIncrease: increaseQuantity;
  onDecrease: decreaseQuantity;
};

const Cart = ({ cart, onDeleteFromCart, onIncrease, onDecrease }: Props) => {
  const products = PRODUCTS;

  const cartQty = cart.reduce((qty, item) => qty + item.qty, 0);

  const total = cart
    .reduce((sum, cp) => {
      const item = products.find((p) => p.id === cp.id);
      return sum + (item?.price || 0) * cp.qty;
    }, 0)
    .toFixed(2);

  return (
    <Box>
      {cart.map((cp) => {
        const item = products.find((p) => p.id === cp.id);
        return (
          <div key={item?.id}>
            <div>{item?.title}</div>
            <div> Quantity: {cp.qty} </div>
            <div>
              <Button onClick={() => onDeleteFromCart(cp.id)}>Remove</Button>
            </div>
            <div>
              <Button onClick={() => onDecrease(cp.id)}>-</Button>
              <Button onClick={() => onIncrease(cp.id)}>+</Button>
            </div>
          </div>
        );
      })}
      <div>Total Items: {cartQty} </div>
      <div>Total: {total} </div>
    </Box>
  );
};

export default Cart;
