import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  SimpleGrid,
  Spinner,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useShopState } from '@/context/ShopContext';
import { Filter } from './elements/Filter';
import { ProductCard } from './elements/ProductCard';

export const Products = () => {
  const { products, isLoading, error, addToCart } = useShopState();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  return (
    <Container maxW={'1980px'} pb={10}>
      <VStack align={'flex-start'} mb={[0, 4]}>
        <Breadcrumb fontSize="sm" color={'gray1'} py={2}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Products</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </VStack>

      <Grid
        templateColumns={{ base: '1fr', xl: '1fr 4fr' }}
        gap={8}
        minH={'100vh'}
      >
        {/* Desktop Filter */}
        <Box
          display={{ base: 'none', xl: 'block' }}
          borderRight={'2px solid #C4C4C4'}
        >
          <Filter
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
        </Box>

        {/* Products View */}
        <VStack alignItems={'stretch'} spacing={{ base: 4, md: 6 }}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify={{ base: 'space-between', xl: 'flex-end' }}
          >
            {/* Mobile Filter */}
            <Box display={{ base: 'block', xl: 'none' }}>
              <Button
                variant={'outline'}
                w={['full', null, 40]}
                borderColor={'divider'}
                fontSize={'md'}
                fontWeight={'normal'}
                display={'flex'}
                justifyContent={'space-between'}
                rightIcon={<ChevronDownIcon fontSize={'xl'} />}
                onClick={onOpen}
              >
                Filter
              </Button>
              <Modal size={'full'} onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                  <Button
                    variant={'solid'}
                    color={'white'}
                    bg={'black'}
                    _hover={{
                      bg: 'dark2',
                    }}
                    fontSize={'md'}
                    fontWeight={'normal'}
                    w={'full'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    rightIcon={<ChevronUpIcon fontSize={'xl'} />}
                    onClick={onClose}
                  >
                    Filter
                  </Button>
                  <Box bg={'white'} p={4}>
                    <Filter
                      categories={categories}
                      selectedCategories={selectedCategories}
                      onCategoryChange={handleCategoryChange}
                    />
                  </Box>
                </ModalContent>
              </Modal>
            </Box>

            {/* Sort by price */}
            <Flex display={{ base: 'none', md: 'flex' }}>
              <Select
                placeholder="price"
                fontFamily={'heading'}
                textTransform={'uppercase'}
              >
                <option value="1">price (High to Low)</option>
                <option value="2">price (Low to High)</option>
              </Select>
            </Flex>
          </Flex>

          {/* Products List */}
          {isLoading && (
            <Center>
              <Spinner />
            </Center>
          )}
          {error && (
            <Center>
              <Heading>{error}</Heading>
            </Center>
          )}
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4 }}
            spacing={{ base: 4, md: 5, lg: 6 }}
          >
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
            ))}
          </SimpleGrid>
        </VStack>
      </Grid>
    </Container>
  );
};
