import {
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
  Image,
  AspectRatio,
  Stack,
  Divider,
} from '@chakra-ui/react';
import PennyBoard from '@/assets/penny-board.jpg';

const Checkout = () => {
  const secondaryTextColor = 'gray.600';
  const colSpan = { base: 2, md: 1 };

  return (
    <Container maxW={'container.xl'} p={0}>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={{ base: 0, sm: 10, md: 20 }}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        {/* Details */}
        <VStack
          w={'full'}
          h={'full'}
          p={10}
          spacing={10}
          alignItems={'flex-start'}
        >
          <VStack spacing={3} alignItems={'flex-start'}>
            <Heading size={'2xl'}>Your details</Heading>
            <Text>If you already have an account, click here</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w={'full'}>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Naruto" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Uzumaki" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Ramen st. 23" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder="Konoha" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option value="fire">Fire</option>
                  <option value="earth">Earth</option>
                  <option value="wind">Wind</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked>Ship to billing address.</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button variant={'brand'} size={'lg'} w={'full'}>
                Place Order
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>

        {/* Cart */}
        <VStack
          w={'full'}
          h={'full'}
          p={10}
          spacing={10}
          alignItems={'flex-start'}
          bg={'gray.50'}
        >
          <VStack spacing={3} alignItems={'flex-start'}>
            <Heading size={'2xl'}>Your cart</Heading>
            <Text>
              If price is too hard on your eyes, try changing the theme.
            </Text>
          </VStack>
          <HStack spacing={6} alignItems={'center'} w={'full'}>
            <AspectRatio ratio={1} w={24}>
              <Image src={PennyBoard} />
            </AspectRatio>
            <Stack
              w={'full'}
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              spacing={0}
            >
              <VStack alignItems={'flex-start'} w={'full'} spacing={0}>
                <Heading size={'md'}>Penny board</Heading>
                <Text fontSize={'lg'} color={secondaryTextColor}>
                  PNYCOMP27541
                </Text>
              </VStack>
              <Heading size={'sm'} textAlign={'end'}>
                $119.00
              </Heading>
            </Stack>
          </HStack>
          <VStack spacing={4} w={'full'} alignItems={'stretch'}>
            <HStack justifyContent={'space-between'}>
              <Text color={secondaryTextColor}>Subtotal</Text>
              <Heading size={'sm'}>$119.00</Heading>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text color={secondaryTextColor}>Shipping</Text>
              <Heading size={'sm'}>$19.00</Heading>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text color={secondaryTextColor}>Taxes (estimated)</Text>
              <Heading size={'sm'}>$23.80</Heading>
            </HStack>
            <Divider />
            <HStack justifyContent={'space-between'}>
              <Text color={secondaryTextColor}>Total</Text>
              <Heading size={'lg'}>$162.79</Heading>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Checkout;
