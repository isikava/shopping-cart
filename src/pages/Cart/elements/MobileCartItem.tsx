import {
  Box,
  HStack,
  Heading,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Counter } from '@/components/Counter';
import { CloseIcon } from '@chakra-ui/icons';
import { useCartState } from '@/context/CartProvider';

export const MobileCartItem = ({ productId, qty }: ICartItem) => {
  const { products, deleteFromCart, updateQuantity } = useCartState();

  const item = products?.find((p) => p.id === productId);

  const handleChangeQuantity = (_: string, qty: number) => {
    const newCartItem = { productId, qty };
    updateQuantity(newCartItem);
  };

  if (!item) return null;

  return (
    <Box fontFamily={'heading'} fontWeight={'normal'}>
      <HStack align={'flex-start'} spacing={4}>
        <Box flex={0.5}>
          <Image src={item.image} />
        </Box>
        <VStack flex={1} align={'flex-start'}>
          <Heading fontSize={'lg'} fontWeight={'normal'}>
            {item.title}
          </Heading>
          <List spacing={2}>
            <ListItem fontFamily={'heading'} fontSize={'sm'} color={'dark2'}>
              <Text as="span" color={'#BDBDBD'}>
                Art.No.:{' '}
              </Text>
              {item.id}
            </ListItem>
          </List>
        </VStack>
        <VStack flex={0}>
          <IconButton
            variant={'icon'}
            size={['xs', 'sm']}
            aria-label="remove from cart"
            icon={<CloseIcon boxSize={[2, 3]} />}
            onClick={() => deleteFromCart(productId)}
          ></IconButton>
          {/* <IconButton
            variant={'icon'}
            size={['xs', 'sm']}
            aria-label="edit cart item"
            icon={<EditIcon boxSize={[2, 3]} />}
          ></IconButton> */}
        </VStack>
      </HStack>

      <Text textTransform={'uppercase'} color={'dark2'} py={2}>
        Quantity
      </Text>
      <HStack justify={'space-between'} align={'center'}>
        <Counter value={qty} onChange={handleChangeQuantity} />
        <Text fontSize={'xl'}>
          <Text as="span" color={'#BDBDBD'} fontSize={'sm'}>
            Price:{' '}
          </Text>
          ${item.price} EUR
        </Text>
      </HStack>
    </Box>
  );
};
