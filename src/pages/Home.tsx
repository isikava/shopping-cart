import {
  Box,
  Center,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Flex,
  Stack,
  Grid,
  Fade,
  BoxProps,
} from '@chakra-ui/react';
import heroBg320 from '@/assets/hero-bg-320.webp';
import heroBg1900 from '@/assets/hero-bg-1900.webp';
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
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { Img } from '@/components/Img';
import { Paginate } from '@/components/Paginate';
import { OutlineText } from '@/components/OutlineText';

const { divider } = colors;

const Home = () => {
  return (
    <Fade in={true}>
      <Box
        bgImage={{ base: heroBg320, md: heroBg1900 }}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat="no-repeat"
      >
        <Container maxW={'8xl'}>
          <Stack
            direction={{ base: 'column', md: 'row-reverse' }}
            w={'full'}
            align={{ base: 'center' }}
            spacing={[2, 4, 8, 16]}
            py={{ base: 8 }}
            pb={{ base: 4, md: 0 }}
          >
            <Flex flex={'1 1 60%'} w={{ base: '80%', md: 'full' }} h={'full'}>
              <Img
                srcSet="img/hero-250.webp 480w, img/hero-850.webp 1980w"
                width={852}
                height={757}
              />
            </Flex>
            <Flex flex={'1 1 40%'}>
              <BorderWrapper pr={{ base: 0, md: 8 }}>
                <VStack
                  maxW={'504px'}
                  spacing={{ base: 4, md: 10 }}
                  align={{ base: 'center', md: 'flex-start' }}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  <Heading
                    fontSize={{ base: '3xl', md: '4xl', lg: '7xl', xl: '86px' }}
                    fontWeight={'semibold'}
                    textTransform={'uppercase'}
                  >
                    SUMMER SALE GEt <OutlineText>30 % OFF</OutlineText> On all
                    dress.
                  </Heading>
                  <Button
                    as={Link}
                    to="/products"
                    variant={'transp'}
                    size={{ base: '-sm', md: '-md' }}
                  >
                    shop now
                  </Button>
                </VStack>
              </BorderWrapper>
            </Flex>
          </Stack>
        </Container>
        <Flex justify={'flex-end'}>
          <Paginate variant="brand" />
        </Flex>
      </Box>
      <Container maxW={'1920px'} mt={4} pb={[4, 6, 8]}>
        <Box
          pos={'relative'}
          border={{ md: `2px solid ${divider}` }}
          mt={[4, 6, 10]}
        >
          <Box
            pos={'absolute'}
            top={0}
            left={'50%'}
            px={10}
            mt={-3}
            ml={'-115px'}
            display={{ base: 'none', md: 'block' }}
            bg={'white'}
          >
            <Heading
              size={'md'}
              fontWeight={'normal'}
              textTransform={'uppercase'}
              textAlign={'center'}
            >
              chose your brand
            </Heading>
          </Box>
          <SimpleGrid
            minChildWidth={{ base: '120px', md: '235px' }}
            color={'dark2'}
            spacing={4}
            py={{ md: 6 }}
            px={{ md: 2 }}
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
        </Box>

        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gridTemplateRows={{ base: 'repeat(4, 1fr)', md: '1fr 1fr' }}
          gap={[4, 6, 7]}
          mt={[4, 6, 8]}
        >
          <GridItem>
            <Flex bg={'#F1EFF0'} h={'full'} align={'stretch'}>
              <Box flex={1}>
                <Img
                  srcSet="img/home1-140.webp 480w, img/home1-460.webp 1980w"
                  width={462}
                  height={434}
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </Box>

              <VStack
                flex={1}
                alignSelf={'center'}
                align={'flex-start'}
                spacing={0}
                py={{ base: 7, lg: 24 }}
              >
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
                <Button as={Link} to="/products" variant={'transp'}>
                  See offers
                </Button>
              </VStack>
            </Flex>
          </GridItem>
          <GridItem
            rowSpan={2}
            bgImage={{
              base: 'url(img/home3-300.webp)',
              sm: 'url(img/home3-900.webp)',
            }}
            bgSize={'cover'}
            bgPos={{ base: 'center', xl: 'left center' }}
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
                <Button as={Link} to="/products" variant={'transp'}>
                  shop now
                </Button>
              </VStack>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              bg={
                'linear-gradient(90deg, #F7E0D5 0%, #F3DCD2 83.85%, rgba(243, 220, 210, 0.14) 100%)'
              }
              h={'full'}
              align={'stretch'}
            >
              <Box flex={1} alignSelf={'center'}>
                <VStack
                  align={'flex-start'}
                  spacing={0}
                  pl={{ base: 6, lg: 20 }}
                  py={{ base: 7, lg: 24 }}
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
                  <Button as={Link} to="/products" variant={'transp'}>
                    See offers
                  </Button>
                </VStack>
              </Box>

              <Box flex={1}>
                <Img
                  srcSet="img/home2-140.webp 480w, img/home2-460.webp 1980w"
                  width={462}
                  height={434}
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Fade>
  );
};

const BrandIcon = ({ children }: BoxProps) => {
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

const BorderWrapper = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      pos={'relative'}
      pt={{ base: 0, md: 4 }}
      _after={{
        content: "''",
        pos: 'absolute',
        w: '80%',
        h: '40%',
        top: 0,
        right: 0,
        borderTop: '2px',
        borderRight: '2px',
        opacity: { base: 0, md: 1 },
        transition: '300ms',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Home;
