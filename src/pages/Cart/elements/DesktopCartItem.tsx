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
import { useShopState } from '@/context/ShopContext';

export const DesktopCartItem = ({ productId, qty }: ICartItem) => {
  const { products, deleteFromCart, updateQuantity } = useShopState();

  const item = products.find((p) => p.id === productId);

  const handleChangeQuantity = (_: string, qty: number) => {
    const newCartItem = { productId, qty };
    updateQuantity(newCartItem);
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
          onClick={() => deleteFromCart(productId)}
        ></IconButton>
      </Box>
    </HStack>
  );
};
