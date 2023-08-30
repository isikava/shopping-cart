import {
  Container,
  Flex,
  Grid,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PRODUCTS, PRODUCTS_WOMEN } from '@/data';
import { ProductCard } from './elements/ProductCard';
import { api } from '@/api';
import { useState, useEffect } from 'react';
import { addToCart } from '../Router';
import { Filter } from './elements/Filter';

type ProductsProps = {
  onAddToCart: addToCart;
};

export const Products = ({ onAddToCart }: ProductsProps) => {
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

  return (
    <Container maxW={'1980px'}>
      <Text fontSize={'sm'} color={'gray1'}>
        Home / Womens Dress / Best Chose
      </Text>

      <Grid
        templateColumns={{ base: '1fr', xl: '1fr 4fr' }}
        gap={4}
        minH={'full'}
      >
        <Filter />

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
            columns={{ base: 2, sm: 3, md: 4 }}
            spacing={{ base: 4, md: 5, lg: 6 }}
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </SimpleGrid>
        </VStack>
      </Grid>
    </Container>
  );
};
