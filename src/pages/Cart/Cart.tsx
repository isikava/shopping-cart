import {
  Button as CButton,
  Box,
  Container,
  Heading,
  Divider,
  VStack,
  Input,
  HStack,
  Text,
  InputGroup,
  InputRightElement,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PRODUCTS, PRODUCTS_WOMEN } from '@/data';
import { Button } from '@/components/Button';
import { MobileCart } from './elements/MobileCart';
import { DesktopCart } from './elements/DesktopCart';
import { deleteFromCart, updateQuantity } from '../Router';
import { calcTotal } from './utils';

export type CartProps = {
  cart: ICartItem[];
  onDeleteFromCart: deleteFromCart;
  onUpdateQuantity: updateQuantity;
};

export const Cart = ({
  cart,
  onDeleteFromCart,
  onUpdateQuantity,
}: CartProps) => {
  const products = PRODUCTS;

  const total = calcTotal(cart, products);

  return (
    <Container maxW={'1440px'}>
      {/* Heading */}
      <VStack
        textAlign={{ md: 'center' }}
        align={['flex-start', 'center']}
        mb={[0, 10]}
      >
        <Breadcrumb fontSize="sm" color={'gray1'} py={4}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Shopping Cart</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading size={['md', '2xl']} fontWeight={'normal'}>
          Shopping Cart
        </Heading>
        <Divider my={3} display={['block', 'none']} />
      </VStack>

      {/* Cart View */}
      <Stack
        w={'full'}
        direction={['column', null, null, 'row']}
        spacing={[8, 16]}
      >
        {/* Cart Items */}
        <Box display={['block', 'none']}>
          <MobileCart
            cart={cart}
            onDeleteFromCart={onDeleteFromCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        </Box>
        <Box display={['none', 'block']} maxW={'4xl'}>
          <DesktopCart
            cart={cart}
            onDeleteFromCart={onDeleteFromCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        </Box>

        {/* Total */}
        <VStack flex={1} align={'stretch'} spacing={[1, 4, 6]}>
          <Heading
            fontSize={['md', '2xl']}
            fontWeight={'normal'}
            color={['gray1', 'black']}
            textTransform={['uppercase', 'initial']}
          >
            Apply Discount Code
          </Heading>
          <InputGroup>
            <Input placeholder="Enter discount code" />
            <InputRightElement>
              <CButton variant={'muted'} px={10} mr={10}>
                Apply
              </CButton>
            </InputRightElement>
          </InputGroup>

          <VStack
            w={'full'}
            alignItems={'stretch'}
            p={4}
            spacing={4}
            bg={'lighthover'}
            border={'2px'}
            borderColor={'divider'}
            fontFamily={'heading'}
          >
            <HStack justifyContent={'space-between'}>
              <Heading
                color={'gray1'}
                fontSize={['sm', 'lg']}
                fontWeight={'medium'}
              >
                Subtotal
              </Heading>
              <Text fontSize={['sm', 'lg']} fontWeight={'medium'}>
                {total} EUR
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Heading
                color={'gray1'}
                fontSize={['sm', 'lg']}
                fontWeight={'medium'}
              >
                Tax
              </Heading>
              <Text fontSize={['sm', 'lg']} fontWeight={'medium'}>
                0.00 EUR
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Heading fontSize={['lg', '2xl']} fontWeight={'medium'}>
                Order Total
              </Heading>
              <Text fontSize={['lg', '2xl']} fontWeight={'medium'}>
                {total} EUR
              </Text>
            </HStack>
            <Button variant={'brand'} size={['md', 'lg']}>
              Proceed to checkout
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};
