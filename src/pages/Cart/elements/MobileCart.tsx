import { VStack, StackDivider } from '@chakra-ui/react';
import { MobileCartItem } from './MobileCartItem';
import { useShopState } from '@/context/ShopContext';

export const MobileCart = () => {
  const { cart } = useShopState();

  return (
    <VStack spacing={4} divider={<StackDivider />}>
      {cart.map((cp) => (
        <MobileCartItem key={cp.productId} {...cp} />
      ))}
    </VStack>
  );
};
