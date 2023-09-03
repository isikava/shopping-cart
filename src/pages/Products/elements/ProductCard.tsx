import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from 'react-icons/hi';
import { AddToCart } from '@/context/ShopContext';

type ProductCardProps = {
  product: IProduct;
  onAddToCart: AddToCart;
};

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Flex direction={'column'} gap={[2, null, 4]}>
      <Box flex={1} as={Link} to={`${product.id}`} display={'block'} w={'full'}>
        <Image src={product.image} h={'full'} maxH={'450px'} fit={'contain'} />
      </Box>

      <Box>
        <Text
          fontFamily={'heading'}
          fontWeight={'semibold'}
          fontSize={{ base: 'xs', lg: 'sm' }}
          color={'divider'}
          textTransform={'uppercase'}
          noOfLines={1}
        >
          {product.category}
        </Text>
        <Heading
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          fontWeight={'light'}
          mb={{ base: 1, md: 2, lg: 4 }}
          noOfLines={1}
        >
          {product.title}
        </Heading>
        <HStack align={'center'}>
          <Heading fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
            {product.price} EUR
          </Heading>
          <Tooltip label="Add to bag">
            <IconButton
              icon={<HiShoppingBag fontSize="24px" />}
              variant={'link'}
              aria-label="Add to cart"
              size="lg"
              color={'gray.800'}
              _hover={{ color: 'black' }}
              onClick={() => onAddToCart(product.id)}
            />
          </Tooltip>
        </HStack>
      </Box>
    </Flex>
  );
};
