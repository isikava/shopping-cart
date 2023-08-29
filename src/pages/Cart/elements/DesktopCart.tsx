import { Box, HStack, Divider, VStack, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DesktopCartItem } from './DesktopCartItem';
import { CartProps } from '..';

export const DesktopCart = ({
  cart,
  onDeleteFromCart,
  onUpdateQuantity,
}: CartProps) => {
  return (
    <Box>
      <HStack
        fontFamily={'heading'}
        fontSize={'lg'}
        fontWeight={'medium'}
        textTransform={'uppercase'}
        color={'gray1'}
        spacing={10}
      >
        <Text as={'span'} flex={1}>
          Product
        </Text>
        <Text as={'span'} w={20}>
          Price
        </Text>
        <Text as={'span'} w={32}>
          Quanity
        </Text>
        <Text as={'span'} w={20}>
          Total
        </Text>
        <Text as={'span'} w={10}>
          &nbsp;
        </Text>
      </HStack>

      <Divider my={6} />

      <VStack spacing={4} align={'stretch'}>
        {cart.map((cp) => (
          <DesktopCartItem
            key={cp.productId}
            {...cp}
            onDeleteFromCart={onDeleteFromCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </VStack>

      <Divider my={6} />

      <HStack justify={'space-between'}>
        <Button as={Link} to="/products" variant={'muted'}>
          continue shopping
        </Button>
        <Button variant={'muted'}>clear shopping cart</Button>
      </HStack>
    </Box>
  );
};
