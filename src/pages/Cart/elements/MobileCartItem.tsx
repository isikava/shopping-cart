import {
  Box,
  Button as CButton,
  HStack,
  Heading,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Counter } from '@/components/Counter';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';

export const MobileCartItem = () => {
  return (
    <Box fontFamily={'heading'} fontWeight={'normal'}>
      <HStack align={'flex-start'} spacing={4}>
        <Box flex={0.5}>
          <Image src="https://britishretro.co.uk/wp-content/uploads/2019/10/red-1950s-style-dress.jpg" />
        </Box>
        <VStack flex={1} align={'flex-start'}>
          <Heading fontSize={'lg'} fontWeight={'normal'}>
            Angels malu zip jeans slim black used
          </Heading>
          <List spacing={2}>
            <ListItem fontFamily={'heading'} fontSize={'sm'} color={'dark2'}>
              <Text as="span" color={'#BDBDBD'}>
                Size:{' '}
              </Text>
              W31/L34
            </ListItem>
            <ListItem fontFamily={'heading'} fontSize={'sm'} color={'dark2'}>
              <Text as="span" color={'#BDBDBD'}>
                Art.No.:
              </Text>
              434536465
            </ListItem>
          </List>
        </VStack>
        <VStack flex={0}>
          <IconButton
            variant={'icon'}
            size={['xs', 'sm']}
            aria-label="remove from cart"
            icon={<CloseIcon boxSize={[2, 3]} />}
          ></IconButton>
          {/* <IconButton
            variant={'icon'}
            size={['xs', 'sm']}
            aria-label="edit cart item"
            icon={<EditIcon boxSize={[2, 3]} />}
          ></IconButton> */}
        </VStack>
      </HStack>

      <Text textTransform={'uppercase'} color={'dark2'} py={2}>
        Quantity
      </Text>
      <HStack justify={'space-between'} align={'center'}>
        <Counter />
        <Text fontSize={'xl'}>
          <Text as="span" color={'#BDBDBD'} fontSize={'sm'}>
            Price:{' '}
          </Text>
          90,00 EUR
        </Text>
      </HStack>
    </Box>
  );
};
