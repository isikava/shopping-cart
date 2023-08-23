import { Link } from 'react-router-dom';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Stack,
  VStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Bag } from '@/assets/cart-icon.svg';
import { LINKS } from '@/data';
import { colors } from '@/theme/colors';
const { brand } = colors;

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      py={{ base: 2, md: 9 }}
      px={{ base: 3, md: 6 }}
      minH={{ base: '60px', lg: '115px' }}
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
            <Logo />
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
        >
          <Flex display={{ base: 'none', md: 'inline-flex' }} gap={1}>
            <NavLink to={'#'} name="Sign&nbsp;In" />
            <NavLink to={'#'} name="Sign&nbsp;Up" />
          </Flex>
          {/* Bag */}
          <Flex align={'center'}>
            <IconButton
              aria-label="cart"
              icon={<Bag />}
              variant={'link'}
              size={'lg'}
            />
            <Text display={{ base: 'none', md: 'block' }} fontWeight={500}>
              0,00&nbsp;EUR
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
            <NavLink to={'#'} name="Sign&nbsp;In" />
            <NavLink to={'#'} name="Sign&nbsp;Up" />
          </VStack>
        </Stack>
      </Collapse>
    </Box>
  );
};

const NavLink = ({ name, to }: { name: string; to: string }) => {
  return (
    <Box
      as={Link}
      to={to}
      py={1}
      px={2}
      fontFamily={'heading'}
      fontSize={'14px'}
      fontWeight={600}
      textTransform={'uppercase'}
      borderBottom={'2px solid transparent'}
      _hover={{ borderBottom: `2px solid ${brand[500]}` }}
    >
      {name}
    </Box>
  );
};
