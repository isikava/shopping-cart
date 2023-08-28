import { VStack, StackDivider } from '@chakra-ui/react';
import { MobileCartItem } from './MobileCartItem';
import { CartProps } from '..';

export const MobileCart = ({
  cart,
  onDeleteFromCart,
  onUpdateQuantity,
}: CartProps) => {
  return (
    <VStack spacing={4} divider={<StackDivider />}>
      {cart.map((cp) => (
        <MobileCartItem
          key={cp.productId}
          {...cp}
          onDeleteFromCart={onDeleteFromCart}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
    </VStack>
  );
};
