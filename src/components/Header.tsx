import { Link, NavLink as RNavLink } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Logo, Bag } from '@/data/icons';
import { LINKS } from '@/data';
import { colors } from '@/theme/colors';
import { useShopState } from '@/context/ShopContext';
const { brand } = colors;

export const Header = () => {
  const { subtotal, cartQty } = useShopState();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      py={{ md: 9 }}
      px={{ base: 3, md: 6 }}
      minH={{ base: '48px', lg: '115px' }}
      bg="black"
      color="white"
      gap={4}
    >
      <Flex align="center" h={'full'}>
        {/* Burger */}
        <Flex
          display={{ base: 'flex', md: 'none' }}
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
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
              w={['66px', 20]}
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
          {LINKS.map((l) => (
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
          // mr={{ base: -1 }}
        >
          <Flex display={{ base: 'none', md: 'inline-flex' }} gap={1}>
            <NavLink to={'sign-in'} name="Sign&nbsp;In" />
            <NavLink to={'sign-up'} name="Sign&nbsp;Up" />
          </Flex>
          {/* Bag */}
          <Flex align={'center'} gap={3}>
            <Center position={'relative'}>
              <IconButton
                as={Link}
                to="cart"
                aria-label="View cart"
                icon={<Bag w={'19px'} h={'22px'} />}
                variant={'link'}
                size={'lg'}
                color={'white'}
                minW={8}
              />
              {cartQty > 0 && (
                <Center
                  position={'absolute'}
                  w={['14px']}
                  h={['15px']}
                  top={0}
                  right={0}
                  transform={'translate(-10%, -20%)'}
                  bg={'brand.500'}
                  color={'white'}
                  userSelect={'none'}
                >
                  <Box as="span" fontSize={['xs', 'sm']} fontFamily={'heading'}>
                    {cartQty}
                  </Box>
                </Center>
              )}
            </Center>

            <Text display={{ base: 'none', md: 'block' }} fontWeight={500}>
              {subtotal.toFixed(2)}&nbsp;EUR
            </Text>
          </Flex>
        </Stack>
      </Flex>

      {/* Mobile Nav */}
      <Collapse in={isOpen} animateOpacity>
        <Stack display={{ md: 'none' }} py={4}>
          <VStack as={'nav'} spacing={4}>
            {LINKS.map((l) => (
              <NavLink key={l.id} {...l} />
            ))}
            <NavLink to={'sign-in'} name="Sign&nbsp;In" />
            <NavLink to={'sign-up'} name="Sign&nbsp;Up" />
          </VStack>
        </Stack>
      </Collapse>
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
