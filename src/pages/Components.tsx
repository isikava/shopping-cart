import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

const Components = () => {
  return (
    <Container maxW={'container.xl'}>
      <VStack spacing={6} align={'flex-start'}>
        <Heading size={'xl'}>Forms</Heading>
        <FormControl>
          <FormLabel>Idle</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Focused</FormLabel>
          <Input />
        </FormControl>

        <Heading size={'xl'}>Buttons</Heading>
        <HStack align={'flex-start'}>
          <VStack spacing={4} align="center">
            <Button colorScheme="teal" variant="solid">
              Button
            </Button>
            <Button colorScheme="teal" variant="outline">
              Button
            </Button>
            <Button colorScheme="teal" variant="ghost">
              Button
            </Button>
            <Button colorScheme="teal" variant="link">
              Button
            </Button>
          </VStack>
          <VStack>
            <Button variant={'sm'}>Apply</Button>
            <Button variant={{ base: 'base', md: 'sm' }}>Apply</Button>
            <Button variant={{ base: 'sm', md: 'secondary' }}>Apply</Button>
          </VStack>
          <VStack>
            <Button variant={'primary'}>Add to bag</Button>
            <Button variant={'primary'}>Add to bag</Button>
            <Button variant={'solid'}>Add to bag</Button>
          </VStack>
          <VStack>
            <Button variant={'secondary'}>♥ Save</Button>
            <Button variant={'outline'}>♥ Save</Button>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Components;
