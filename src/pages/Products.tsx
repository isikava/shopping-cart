import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Select,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PRODUCTS, PRODUCTS_WOMEN } from '@/data';
import { ProductCard } from '@/components/ProductCard';
import { api } from '@/api';
import { useState, useEffect } from 'react';
import { deleteFromCart, increaseQuantity, decreaseQuantity } from './Router';

type Props = {
  cart: ICartItem[];
  onDeleteFromCart: deleteFromCart;
  onIncrease: increaseQuantity;
  onDecrease: decreaseQuantity;
};

const Products = ({
  cart,
  onDeleteFromCart,
  onIncrease,
  onDecrease,
}: Props) => {
  const [products, setProducts] = useState<IProduct[]>(PRODUCTS);

  useEffect(() => {
    let ignore = false;

    const getProducts = async () => {
      const data = await api.getProducts();
      if (!ignore) {
        setProducts(data);
      }
    };

    // getProducts();

    return () => {
      ignore = true;
    };
  }, []);

  const cartQty = cart.reduce((qty, item) => qty + item.qty, 0);

  const total = cart
    .reduce((sum, cp) => {
      const item = products.find((p) => p.id === cp.id);
      return sum + (item?.price || 0) * cp.qty;
    }, 0)
    .toFixed(2);

  return (
    <Container maxW={'1980px'}>
      <Text fontSize={'sm'} color={'gray1'}>
        Home / Womens Dress / Best Chose
      </Text>

      <Box>
        {cart.map((cp) => {
          const item = products.find((p) => p.id === cp.id);
          return (
            <div key={item?.id}>
              <div>{item?.title}</div>
              <div> Quantity: {cp.qty} </div>
              <div>
                <Button onClick={() => onDeleteFromCart(cp.id)}>Remove</Button>
              </div>
              <div>
                <Button onClick={() => onDecrease(cp.id)}>-</Button>
                <Button onClick={() => onIncrease(cp.id)}>+</Button>
              </div>
            </div>
          );
        })}
        <div>Total Items: {cartQty} </div>
        <div>Total: {total} </div>
      </Box>

      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 4fr' }}
        gap={4}
        minH={'full'}
      >
        {/* Filter */}
        <VStack
          as={'aside'}
          // display={{ base: 'none', md: 'flex' }}
          borderRight={{ lg: '2px solid #C4C4C4' }}
        >
          <Text>Filter</Text>
        </VStack>

        {/* Products View */}
        <VStack
          alignItems={{ base: 'stretch', md: 'flex-end' }}
          spacing={{ base: 4, md: 6 }}
        >
          <Flex>
            <Select
              placeholder="price"
              fontFamily={'heading'}
              textTransform={'uppercase'}
            >
              <option value="1">price (High to Low)</option>
              <option value="2">price (Low to High)</option>
            </Select>
          </Flex>

          {/* Products List */}
          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 4 }}
            spacing={{ base: 4, md: 5, lg: 6 }}
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onIncrease={onIncrease} />
            ))}
          </SimpleGrid>
        </VStack>
      </Grid>
    </Container>
  );
};

export default Products;
