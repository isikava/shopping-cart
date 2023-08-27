import { deleteFromCart, increaseQuantity, decreaseQuantity } from '../Router';
import {
  Button as CButton,
  Box,
  Container,
  Heading,
  Divider,
  VStack,
  Input,
  Flex,
  HStack,
  Text,
  Spacer,
  InputGroup,
  InputRightElement,
  StackDivider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PRODUCTS, PRODUCTS_WOMEN } from '@/data';
import { Button } from '@/components/Button';
import { MobileCart } from './elements/MobileCart';
import { DesktopCart } from './elements/DesktopCart';

type Props = {
  cart: ICartItem[];
  onDeleteFromCart: deleteFromCart;
  onIncrease: increaseQuantity;
  onDecrease: decreaseQuantity;
};

export const Cart = ({
  cart,
  onDeleteFromCart,
  onIncrease,
  onDecrease,
}: Props) => {
  const products = PRODUCTS;

  const cartQty = cart.reduce((qty, item) => qty + item.qty, 0);

  const total = cart
    .reduce((sum, cp) => {
      const item = products.find((p) => p.id === cp.id);
      return sum + (item?.price || 0) * cp.qty;
    }, 0)
    .toFixed(2);

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
          <MobileCart />
        </Box>
        <Box display={['none', 'block']} maxW={'4xl'}>
          <DesktopCart />
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
                119.00 EUR
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
                Subtotal
              </Heading>
              <Text fontSize={['lg', '2xl']} fontWeight={'medium'}>
                119.00 EUR
              </Text>
            </HStack>
            <Button variant={'brand'} size={['md', 'lg']}>
              Proceed to checkout
            </Button>
          </VStack>
        </VStack>
      </Stack>

      {/* <Image src="https://britishretro.co.uk/wp-content/uploads/2019/10/red-1950s-style-dress.jpg" /> */}

      {/* <Divider h={16} /> */}

      {/* <Spacer h={'2000px'} /> */}

      {/* <Box display={'none'}>
        {cart.map((cp) => {
          const item = products.find((p) => p.id === cp.id);
          return (
            <div key={item?.id}>
              <div>{item?.title}</div>
              <div> Quantity: {cp.qty} </div>
              <div>
                <CButton onClick={() => onDeleteFromCart(cp.id)}>
                  Remove
                </CButton>
              </div>
              <div>
                <CButton onClick={() => onDecrease(cp.id)}>-</CButton>
                <CButton onClick={() => onIncrease(cp.id)}>+</CButton>
              </div>
            </div>
          );
        })}
        <div>Total Items: {cartQty} </div>
        <div>Total: {total} </div>
      </Box> */}
    </Container>
  );
};
