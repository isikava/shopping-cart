import { Link, NavLink as RNavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Stack,
  VStack,
  Text,
  useDisclosure,
  Center,
  Container,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  CloseButton,
  HStack,
  Heading,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { NAV_LINKS, Logo, Bag } from '@/data';
import { useCartState } from '@/context/CartProvider';
import { MobileCart } from '@/pages/Cart/elements/MobileCart';
import { colors } from '@/theme/colors';
const { brand } = colors;

export const Header = () => {
  const { subtotal, cartQty } = useCartState();
  const { isOpen: isOpenMenu, onToggle: onToggleMenu } = useDisclosure();
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();

  return (
    <Box
      as="header"
      bg="black"
      color="white"
      pos={{ base: 'sticky', md: 'relative' }}
      top={0}
      zIndex={'sticky'}
      w={'full'}
    >
      <Container maxW={'1980px'}>
        <Flex
          align="center"
          h={'full'}
          py={{ md: 9 }}
          minH={{ base: '48px', lg: '115px' }}
          gap={4}
        >
          {/* Burger */}
          <Flex
            display={{ base: 'flex', md: 'none' }}
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -4 }}
          >
            <IconButton
              onClick={onToggleMenu}
              icon={isOpenMenu ? <CloseIcon /> : <HamburgerIcon />}
              variant={'ghost'}
              aria-label="toggle navigation"
              size="lg"
              color={'white'}
              _hover={{ color: 'gray.600' }}
            />
          </Flex>

          {/* Logo */}
          <Flex
            flex={1}
            align={'center'}
            justify={{ base: 'center', md: 'start' }}
          >
            <Box as={Link} to="/">
              <Logo
                w={['66px', null, 20]}
                h={'auto'}
                color={'white'}
                fill={'none'}
                _hover={{ color: 'main' }}
              />
            </Box>
          </Flex>

          {/* Desktop Nav */}
          <Stack
            as={'nav'}
            flex={{ base: 'auto', md: 1 }}
            display={{ base: 'none', md: 'flex' }}
            justify={'center'}
            direction={'row'}
            spacing={3}
            px={4}
          >
            {NAV_LINKS.map((l) => (
              <NavLink key={l.name} {...l} />
            ))}
          </Stack>

          {/* Authorization group */}
          <Stack
            role="group"
            flex={1}
            justify={'flex-end'}
            direction={'row'}
            align={'center'}
            spacing={2}
            mr={[-2, null, 0]}
          >
            <Flex display={{ base: 'none', md: 'inline-flex' }} gap={1}>
              <NavLink to={'sign-in'} name="Sign&nbsp;In" />
              <NavLink to={'sign-up'} name="Sign&nbsp;Up" />
            </Flex>

            {/* Bag */}
            <Flex align={'center'} gap={3}>
              <Box
                as="button"
                aria-label="View cart"
                pos={'relative'}
                minW={8}
                color={'white'}
                _hover={{ color: 'gray.400' }}
                transition={'200ms'}
                onClick={onOpenCart}
              >
                <Bag w={'19px'} h={'22px'} />
                {cartQty > 0 && (
                  <Center
                    as="span"
                    position={'absolute'}
                    w={['14px']}
                    h={['15px']}
                    top={0}
                    right={0}
                    // transform={'translate(-10%, -20%)'}
                    bg={'brand.500'}
                    color={'white'}
                    fontSize={['xs', 'sm']}
                    fontFamily={'heading'}
                    userSelect={'none'}
                  >
                    {cartQty}
                  </Center>
                )}
              </Box>

              <Text display={{ base: 'none', md: 'block' }} fontWeight={500}>
                {subtotal.toFixed(2)}&nbsp;EUR
              </Text>
            </Flex>
          </Stack>
        </Flex>

        {/* Mobile Nav */}
        <Collapse in={isOpenMenu} animateOpacity>
          <Stack display={{ md: 'none' }} py={4}>
            <VStack as={'nav'} spacing={2}>
              {NAV_LINKS.map((l) => (
                <NavLink key={l.id} {...l} />
              ))}
              <NavLink to={'sign-in'} name="Sign&nbsp;In" />
              <NavLink to={'sign-up'} name="Sign&nbsp;Up" />
            </VStack>
          </Stack>
        </Collapse>

        <MiniCart isOpen={isOpenCart} onClose={onCloseCart} />
      </Container>
    </Box>
  );
};

const NavLink = ({ name, to }: { name: string; to: string }) => {
  return (
    <Box
      as={RNavLink}
      to={to}
      py={1}
      px={2}
      fontFamily={'heading'}
      fontSize={'14px'}
      fontWeight={600}
      textTransform={'uppercase'}
      borderBottom={'2px solid transparent'}
      transition={'200ms ease'}
      _hover={{ borderBottom: `2px solid ${brand[500]}` }}
      _activeLink={{ borderBottom: `2px solid ${brand[500]}` }}
    >
      {name}
    </Box>
  );
};

type MiniCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MiniCart = ({ isOpen, onClose }: MiniCartProps) => {
  const { subtotal } = useCartState();
  const navigate = useNavigate();

  const onViewCart = () => {
    onClose();
    navigate('/cart');
  };

  const onCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <Drawer
      size={{ base: 'full', sm: 'xs' }}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <CloseButton
            size={'lg'}
            color={'gray1'}
            ml={-2}
            mb={8}
            onClick={onClose}
          />
          <MobileCart />
          <Box h={10} />
        </DrawerBody>

        <DrawerFooter borderTop={'2px'} borderColor={'lighthover'}>
          <VStack w={'full'} align={'stretch'} spacing={4}>
            <HStack justify={'space-between'}>
              <Heading
                fontSize={['md', 'lg', 'xl']}
                fontWeight={'normal'}
                textTransform={'capitalize'}
              >
                Cart Subtotal:{' '}
              </Heading>
              <Text
                fontFamily={'heading'}
                fontSize={['md', 'lg', 'xl']}
                fontWeight={'normal'}
                textTransform={'capitalize'}
              >
                {subtotal.toFixed(2)} EUR
              </Text>
            </HStack>
            <Button variant={'second'} h={'50px'} onClick={onViewCart}>
              View and edit cart
            </Button>
            <Button variant={'brand'} h={'50px'} onClick={onCheckout}>
              Go to checkout
            </Button>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
