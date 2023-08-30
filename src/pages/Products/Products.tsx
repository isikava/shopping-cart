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
import { useState, useEffect, useMemo } from 'react';
import { addToCart } from '../Router';
import { Filter } from './elements/Filter';

type ProductsProps = {
  onAddToCart: addToCart;
};

export const Products = ({ onAddToCart }: ProductsProps) => {
  const [products, setProducts] = useState<IProduct[]>(PRODUCTS);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    return result;
  }, [selectedCategories, products]);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

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
        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />

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
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </SimpleGrid>
        </VStack>
      </Grid>
    </Container>
  );
};
