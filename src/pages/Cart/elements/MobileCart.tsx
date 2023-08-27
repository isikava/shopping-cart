import { VStack, StackDivider } from '@chakra-ui/react';
import { MobileCartItem } from './MobileCartItem';

export const MobileCart = () => {
  return (
    <VStack spacing={4} divider={<StackDivider />}>
      <MobileCartItem />
      <MobileCartItem />
    </VStack>
  );
};
