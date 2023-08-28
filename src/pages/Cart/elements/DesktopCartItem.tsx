import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Counter } from '@/components/Counter';
import { CartItemProps } from './MobileCartItem';
import { PRODUCTS } from '@/data';

export const DesktopCartItem = ({
  productId,
  qty,
  onDeleteFromCart,
  onUpdateQuantity,
}: CartItemProps) => {
  const item = PRODUCTS.find((p) => p.id === productId);

  const handleChangeQuantity = (_: string, newQty: number) => {
    onUpdateQuantity(productId, newQty);
  };

  if (!item) return null;

  return (
    <HStack spacing={10}>
      <Flex flex={1} gap={4}>
        <Box flex={0.5}>
          <Image maxH={32} fit={'contain'} src={item.image} />
        </Box>

        <Box flex={1}>
          <Heading
            fontSize={'lg'}
            fontWeight={'medium'}
            textTransform={'uppercase'}
            letterSpacing={'0.5px'}
          >
            {item.title}
          </Heading>
        </Box>
      </Flex>
      <Text as={'span'} w={20}>
        {item.price} EUR
      </Text>
      <Box w={32}>
        <Counter value={qty} onChange={handleChangeQuantity} />
      </Box>
      <Text as={'span'} w={20}>
        {(item.price * qty).toFixed(2)} EUR
      </Text>
      <Box w={10}>
        <IconButton
          variant={'icon'}
          size={['xs', 'sm']}
          aria-label="remove from cart"
          icon={<CloseIcon boxSize={[2, 3]} />}
          onClick={() => onDeleteFromCart(productId)}
        ></IconButton>
      </Box>
    </HStack>
  );
};
