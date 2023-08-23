import {
  Box,
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

type Props = {
  products: IProduct[];
};

const Products = ({ products }: Props) => {
  return (
    <Container maxW={'1980px'}>
      {/* <h1>Products page</h1>
      {products?.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
        </div>
      ))} */}
      <Text fontSize={'sm'} color={'gray1'}>
        Home / Womens Dress / Best Chose
      </Text>
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 4fr' }}
        gap={4}
        // height={'2000px'}
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
            {PRODUCTS_WOMEN?.map((p) => <ProductCard key={p.id} product={p} />)}
          </SimpleGrid>
        </VStack>
      </Grid>
    </Container>
  );
};

export default Products;
