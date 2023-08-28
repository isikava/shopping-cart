import {
  Box,
  Center,
  Container,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Flex,
  Stack,
  Grid,
} from '@chakra-ui/react';
import heroBgMobi from '@/assets/hero-bg-320.jpg';
import heroBg from '@/assets/hero-bg-1900.jpg';
import home3mobi from '@/assets/home3-300.jpg';
import home3 from '@/assets/home3-900.jpg';
import { Button } from '@/components/Button';
import { Paginate } from '@/components/Paginate';
import {
  BArmani,
  BBurberry,
  BChanel,
  BDior,
  BFendi,
  BGucci,
  BVersace,
} from '@/data/icons';
import { colors } from '@/theme/colors';

const { divider } = colors;

const Home = () => {
  return (
    <>
      <Box
        bgImage={{ base: heroBgMobi, md: heroBg }}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat="no-repeat"
      >
        <Container maxW={'8xl'}>
          <Stack
            direction={{ base: 'column', md: 'row-reverse' }}
            w={'full'}
            align={{ base: 'center' }}
            spacing={{ base: 2, md: 10 }}
            py={{ base: 8 }}
            pb={{ base: 4, md: 0 }}
          >
            <Flex flex={'1 1 55%'} w={{ base: '80%', md: 'full' }}>
              <Image
                srcSet="img/hero-250.png 480w, img/hero-850.png 1980w"
                w={'full'}
              />
            </Flex>
            <Flex flex={'1 1 45%'}>
              <VStack
                maxW={'30rem'}
                px={4}
                spacing={{ base: 4, md: 10 }}
                align={{ base: 'center', md: 'flex-start' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                <Heading
                  fontSize={{ base: '3xl', md: '4xl', lg: '7xl' }}
                  fontWeight={'semibold'}
                  textTransform={'uppercase'}
                >
                  SUMMER SALE GEt 30% OFF On all dress.
                </Heading>
                <Button variant={'transp'} size={{ base: '-sm', md: '-md' }}>
                  shop now
                </Button>
              </VStack>
            </Flex>
          </Stack>
        </Container>
        <Flex justify={'flex-end'}>
          <Paginate variant="brand" />
        </Flex>
      </Box>
      <Container maxW={'1920px'} mb={'500px'} mt={4}>
        <Heading
          size={'md'}
          fontWeight={'normal'}
          textTransform={'uppercase'}
          textAlign={'center'}
        >
          chose your brand
        </Heading>
        <SimpleGrid
          minChildWidth={{ base: '120px', md: '235px' }}
          color={'dark2'}
          border={{ md: `2px solid ${divider}` }}
          py={{ md: 6 }}
          px={{ md: 2 }}
          mt={{ base: 4 }}
          spacing={4}
          mb={3}
        >
          <BrandIcon>
            <BChanel h={{ base: 3, md: 6 }} w={'auto'} />
          </BrandIcon>
          <BrandIcon>
            <BBurberry h={{ base: 3, md: 6 }} w={'auto'} />
          </BrandIcon>
          <BrandIcon>
            <BDior h={{ base: 4, md: 8 }} w={'auto'} />
          </BrandIcon>
          <BrandIcon>
            <BFendi h={{ base: 3.5, md: 7 }} w={'auto'} />
          </BrandIcon>
          <BrandIcon>
            <BVersace h={{ base: 3.5, md: 7 }} w={'auto'} />
          </BrandIcon>
          <BrandIcon>
            <BGucci h={{ base: 3.5, md: 7 }} w={'auto'} />
          </BrandIcon>
          <BrandIcon>
            <BArmani h={{ base: 3, md: 7 }} w={'auto'} />
          </BrandIcon>
          <GridItem display={{ md: 'none' }}>
            <BrandIcon>
              <BChanel h={{ base: 3 }} w={'auto'} />
            </BrandIcon>
          </GridItem>
        </SimpleGrid>
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gridTemplateRows={{ base: 'repeat(4, 1fr)', md: '1fr 1fr' }}
          gap={4}
        >
          <GridItem>
            <Flex bg={'#F1EFF0'} h={'full'} align={'center'}>
              <Image
                srcSet="img/home1-140.jpg 480w, img/home1-460.jpg 1980w"
                flex={1}
                objectFit={'cover'}
                alignSelf={'stretch'}
              />
              <VStack flex={1} align={'flex-start'} spacing={0} py={6}>
                <Heading
                  fontSize={{ base: 'lg', md: '3xl', xl: '5xl' }}
                  textTransform={'uppercase'}
                >
                  choose your look
                </Heading>
                <Text
                  fontSize={{ base: 'x-small', md: 'lg' }}
                  fontWeight={'light'}
                  mb={{ base: 2, md: 8 }}
                >
                  See our clothing collections
                </Text>
                <Button variant={'transp'}>See offers</Button>
              </VStack>
            </Flex>
          </GridItem>
          <GridItem
            rowSpan={2}
            bgImage={{ base: home3mobi, md: home3 }}
            bgSize={'cover'}
            bgPos={'center'}
          >
            <Flex h={'full'} align={'flex-end'}>
              <VStack
                align={'flex-start'}
                spacing={0}
                pl={{ base: 6, lg: 20 }}
                py={{ base: 7, lg: 24 }}
              >
                <Heading
                  fontSize={{ base: '3xl', md: '5xl', xl: '8xl' }}
                  textTransform={'uppercase'}
                >
                  Up to <br /> 40% off
                </Heading>
                <Text
                  fontSize={{ base: 'xs', md: 'lg' }}
                  fontWeight={'light'}
                  mb={{ base: 2, md: 10 }}
                >
                  Special offers and great deals
                </Text>
                <Button variant={'transp'}>shop now</Button>
              </VStack>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex bg={'#F3DCD2'} h={'full'} align={'center'}>
              <VStack
                flex={1}
                align={'flex-start'}
                spacing={0}
                pl={{ base: 6, lg: 20 }}
              >
                <Heading
                  fontSize={{ base: 'lg', md: '3xl', xl: '5xl' }}
                  textTransform={'uppercase'}
                >
                  brand new style
                </Heading>
                <Text
                  fontSize={{ base: 'x-small', md: 'lg' }}
                  fontWeight={'light'}
                  mb={{ base: 2, md: 8 }}
                >
                  Popular clothing brands
                </Text>
                <Button variant={'transp'}>See offers</Button>
              </VStack>
              <Image
                srcSet="img/home2-140.jpg 480w, img/home2-460.jpg 1980w"
                flex={1}
                flexShrink={0}
                objectFit={'cover'}
                alignSelf={'stretch'}
              />
            </Flex>
          </GridItem>
        </Grid>
        <SimpleGrid columns={{ base: 1 }} gap={3}></SimpleGrid>
      </Container>
    </>
  );
};

const BrandIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center
      h={{ base: 14, md: 36 }}
      border={{ base: '2px', md: 0 }}
      borderColor={'divider'}
      _hover={{
        bg: 'lighthover',
        color: 'black',
      }}
    >
      {children}
    </Center>
  );
};

export default Home;
