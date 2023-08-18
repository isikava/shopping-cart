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
import { LINKS } from '@/data';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Bag } from '@/assets/cart-icon.svg';

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      py={{ base: 2, md: 4 }}
      px={{ base: 3, md: 6 }}
      minH={'60px'}
      bg="black"
      color="white"
    >
      <Flex align="center">
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
          />
        </Flex>
        {/* Nav */}
        <Flex
          flex={{ base: 1 }}
          align={'center'}
          justify={{ base: 'center', md: 'start' }}
        >
          <Box as={Link} to="/">
            <Logo />
          </Box>
          {/* Desktop Nav */}
          <Stack
            as={'nav'}
            display={{ base: 'none', md: 'flex' }}
            direction={'row'}
            spacing={4}
            ml={10}
          >
            {LINKS.map((l) => (
              <NavLink key={l.name} {...l} />
            ))}
          </Stack>
        </Flex>

        {/* Authorization */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          align={'center'}
          spacing={[2, 6]}
        >
          <Flex display={{ base: 'none', md: 'inline-flex' }} gap={4}>
            <NavLink to={'#'} name="Sign&nbsp;In" />
            <NavLink to={'#'} name="Sign&nbsp;Up" />
          </Flex>
          {/* Bag */}
          <Flex>
            <IconButton aria-label="cart" icon={<Bag />} variant={'link'} />
            <Text display={{ base: 'none', md: 'block' }} fontWeight={500}>
              0,00&nbsp;EUR
            </Text>
          </Flex>
        </Stack>
      </Flex>

      {/* Mobile Nav */}
      <Collapse in={isOpen} animateOpacity>
        <Stack py={4} display={{ md: 'none' }}>
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
      fontSize={'14px'}
      fontWeight={600}
      textTransform={'uppercase'}
      borderBottom={'2px solid transparent'}
      _hover={{ borderBottom: '2px solid red' }}
    >
      {name}
    </Box>
  );
};
