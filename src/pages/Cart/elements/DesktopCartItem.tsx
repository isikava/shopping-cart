import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Counter } from '@/components/Counter';

export const DesktopCartItem = () => {
  return (
    <HStack spacing={10}>
      <Flex flex={1} gap={4}>
        <Image
          flexShrink={0}
          maxH={32}
          src="https://britishretro.co.uk/wp-content/uploads/2019/10/red-1950s-style-dress.jpg"
        />
        <Box flex={1}>
          <Heading
            fontSize={'lg'}
            fontWeight={'medium'}
            textTransform={'uppercase'}
            letterSpacing={'0.5px'}
          >
            Angels malu zip jeans slim black used
          </Heading>
        </Box>
      </Flex>
      <Text as={'span'} w={20}>
        120 EUR
      </Text>
      <Box w={32}>
        <Counter />
      </Box>
      <Text as={'span'} w={20}>
        120 EUR
      </Text>
      <Box w={10}>
        <IconButton
          variant={'icon'}
          size={['xs', 'sm']}
          aria-label="remove from cart"
          icon={<CloseIcon boxSize={[2, 3]} />}
        ></IconButton>
      </Box>
    </HStack>
  );
};
