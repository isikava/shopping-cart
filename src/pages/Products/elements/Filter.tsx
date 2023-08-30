import { VStack, Text, Heading } from '@chakra-ui/react';

export const Filter = () => {
  return (
    <VStack
      as={'aside'}
      // display={{ base: 'none', md: 'flex' }}
      borderRight={{ lg: '2px solid #C4C4C4' }}
    >
      <Heading>Category</Heading>
    </VStack>
  );
};
