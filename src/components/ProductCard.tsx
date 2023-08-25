import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from 'react-icons/hi';
import { increaseQuantity } from '@/pages/Router';

type Props = {
  product: IProduct;
  onIncrease: increaseQuantity;
};

export const ProductCard = ({ product, onIncrease }: Props) => {
  return (
    <Flex direction={'column'}>
      <Box
        flex={1}
        as={Link}
        to={`${product.id}`}
        display={'block'}
        w={'full'}
        mb={{ base: 2 }}
      >
        <Image src={product.image} h={'100%'} fit={'contain'} />
      </Box>

      <VStack align={'start'} spacing={0}>
        <Heading
          fontSize={{ base: 'xs', lg: 'md' }}
          color={'divider'}
          textTransform={'uppercase'}
          noOfLines={1}
        >
          {product.title}
        </Heading>
        <Text
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          fontWeight={'light'}
          mb={{ base: 1, md: 2, lg: 4 }}
          noOfLines={2}
        >
          {product.description}
        </Text>
        <HStack align={'center'}>
          <Heading fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
            {product.price} EUR
          </Heading>
          <Tooltip label="Add to cart">
            <IconButton
              icon={<HiShoppingBag fontSize="24px" />}
              variant={'link'}
              aria-label="Add to cart"
              size="lg"
              color={'gray.800'}
              _hover={{ color: 'black' }}
              onClick={() => onIncrease(product.id)}
            />
          </Tooltip>
        </HStack>
      </VStack>
    </Flex>
  );
};
