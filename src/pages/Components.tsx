import {
  Box,
  Button,
  Checkbox,
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
          <Input placeholder="Naruto" />
        </FormControl>
        <FormControl>
          <FormLabel>Focused</FormLabel>
          <Input placeholder="Naruto" />
        </FormControl>

        <Heading size={'xl'}>Buttons</Heading>
        <HStack align={'flex-start'}>
          <VStack spacing={4} align="center">
            <Button colorScheme="teal" variant="solid">
              Chakra
            </Button>
            <Button colorScheme="teal" variant="outline">
              Chakra
            </Button>
            <Button colorScheme="teal" variant="ghost">
              Chakra
            </Button>
            <Button colorScheme="teal" variant="link">
              Chakra
            </Button>
          </VStack>
          <VStack>
            <Button variant={'muted'} size={'sm'}>
              Apply
            </Button>
            <Button variant={'outline'}>Outline</Button>
          </VStack>
          <VStack>
            <Button variant={'primary'}>Add to bag</Button>
            <Button variant={'primary'} size={{ base: '-sm', md: '-md' }}>
              Add to bag
            </Button>
            <Button variant={'solid'}>Solid</Button>
          </VStack>
          <VStack>
            <Button variant={'secondary'}>♥ Save</Button>
            <Button variant={'outline'}>♥ Outline</Button>
          </VStack>
        </HStack>

        <Heading>Checkboxes</Heading>
        <VStack spacing={6} align={'flex-start'}>
          <Checkbox>State 1</Checkbox>
          <Checkbox>Hover</Checkbox>
          <Checkbox defaultChecked>Checked</Checkbox>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Components;
