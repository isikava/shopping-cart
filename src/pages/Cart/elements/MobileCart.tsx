import { VStack, StackDivider } from '@chakra-ui/react';
import { MobileCartItem } from './MobileCartItem';
import { useCartState } from '@/context/CartProvider';

export const MobileCart = () => {
  const { cart } = useCartState();

  return (
    <VStack spacing={4} divider={<StackDivider />}>
      {cart.map((cp) => (
        <MobileCartItem key={cp.productId} {...cp} />
      ))}
    </VStack>
  );
};
