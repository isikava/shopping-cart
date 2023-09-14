import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Divider,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button as CButton,
  LinkProps,
  Icon,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import { CONTACTS, FEATURES, Logo, MENU, SOCIALS } from '@/data';

export const Footer = () => {
  return (
    <Box as={'footer'} bg="black" color="white">
      <Container maxW={'1980px'}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align={'stretch'}
          justify={{ md: 'space-between' }}
          spacing={6}
          pt={[6, 8, 10, 14]}
          pb={[6, 8, 10, 20]}
        >
          <Flex justify={'center'}>
            <Box as={RLink} to="/">
              <Logo
                w={['100px']}
                h={'auto'}
                color={'white'}
                fill={'none'}
                _hover={{ color: 'main' }}
              />
            </Box>
          </Flex>

          <Box display={{ base: 'block', md: 'none' }}>
            <MobileLinks />
          </Box>

          <Box display={{ base: 'none', md: 'block' }}>
            <Heading
              fontSize={'lg'}
              fontWeight={'semibold'}
              textTransform={'uppercase'}
              mb={6}
            >
              Features
            </Heading>
            <FeaturesList />
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <Heading
              fontSize={'lg'}
              fontWeight={'semibold'}
              textTransform={'uppercase'}
              mb={6}
            >
              Menu
            </Heading>
            <MenuList />
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <Heading
              fontSize={'lg'}
              fontWeight={'semibold'}
              textTransform={'uppercase'}
              mb={6}
            >
              Contact Us
            </Heading>
            <ContactsList />
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <Heading
              fontSize={'lg'}
              fontWeight={'semibold'}
              textTransform={'uppercase'}
              mb={6}
            >
              Follow Us
            </Heading>
            <SocialsList />
          </Box>

          <Box>
            <Heading
              fontSize={['md', 'lg']}
              fontWeight={'medium'}
              textTransform={'uppercase'}
            >
              Join Us
            </Heading>
            <VStack spacing={3} mt={[4, 6]}>
              <FormControl>
                <FormLabel
                  fontSize={['xs', 'sm']}
                  textTransform={'uppercase'}
                  color={'gray1'}
                >
                  Subscribe to our newsletters
                </FormLabel>
                <Input
                  placeholder="Email Address"
                  _placeholder={{ color: 'white' }}
                />
              </FormControl>
              <CButton
                w={'full'}
                color={'dark2'}
                bg={'white'}
                h={10}
                textTransform={'uppercase'}
              >
                Subscribe!
              </CButton>
            </VStack>
          </Box>
        </Stack>

        <Divider
          borderColor={'gray2'}
          display={{ base: 'none', md: 'block' }}
        />
        <Text mt={4} pb={[4, 6, 10]}>
          © 2023. Developed by{' '}
          <Link href="https://github.com/isikava/shopping-cart" target="_blank">
            Isikava
          </Link>{' '}
        </Text>
      </Container>
    </Box>
  );
};

const ListLink = ({ children, ...rest }: LinkProps) => {
  return (
    <Link
      fontSize={['xs', 'sm']}
      textTransform={'uppercase'}
      color={'gray1'}
      {...rest}
    >
      {children}
    </Link>
  );
};

const FeaturesList = () => {
  return (
    <List display={'flex'} flexDir={'column'} gap={[1, 2]}>
      {FEATURES.map((l) => (
        <ListItem key={l.name}>
          <ListLink>{l.name}</ListLink>
        </ListItem>
      ))}
    </List>
  );
};

const MenuList = () => {
  return (
    <List display={'flex'} flexDir={'column'} gap={[1, 2]}>
      {MENU.map((l) => (
        <ListItem key={l.name}>
          <ListLink>{l.name}</ListLink>
        </ListItem>
      ))}
    </List>
  );
};

const ContactsList = () => {
  return (
    <List display={'flex'} flexDir={'column'} gap={2}>
      {Object.entries(CONTACTS).map(([key, value]) => (
        <ListItem
          key={key}
          fontSize={'xs'}
          textTransform={'uppercase'}
          fontWeight={'medium'}
        >
          <Heading fontSize={'xs'} mb={1}>
            {key}
          </Heading>
          <ListLink href={value.link} color={'gray1'}>
            {value.name}
          </ListLink>
        </ListItem>
      ))}
    </List>
  );
};

const SocialsList = () => {
  return (
    <List display={'flex'} flexDir={'column'} gap={2}>
      {SOCIALS.map((l) => (
        <ListItem key={l.name}>
          <ListLink role="group" display={'flex'} alignItems={'center'} gap={2}>
            <Icon
              as={l.icon}
              color={'white'}
              boxSize={6}
              _groupHover={{
                color: 'gray.400',
              }}
            />{' '}
            <Text as="span">{l.name}</Text>
          </ListLink>
        </ListItem>
      ))}
    </List>
  );
};

const MobileLinks = () => {
  return (
    <Accordion w={'full'} variant={'dark'} allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton px={0}>
            <Box
              as="span"
              flex={1}
              textAlign={'left'}
              textTransform={'uppercase'}
            >
              Features
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel px={0}>
          <FeaturesList />
        </AccordionPanel>
      </AccordionItem>
      <Divider borderColor={'gray2'} />
      <AccordionItem>
        <h2>
          <AccordionButton px={0}>
            <Box
              as="span"
              flex={1}
              textAlign={'left'}
              textTransform={'uppercase'}
            >
              Menu
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel px={0}>
          <MenuList />
        </AccordionPanel>
      </AccordionItem>
      <Divider borderColor={'gray2'} />
      <AccordionItem>
        <h2>
          <AccordionButton px={0}>
            <Box
              as="span"
              flex={1}
              textAlign={'left'}
              textTransform={'uppercase'}
            >
              Contact Us
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel px={0}>
          <ContactsList />
        </AccordionPanel>
      </AccordionItem>
      <Divider borderColor={'gray2'} />
      <AccordionItem>
        <h2>
          <AccordionButton px={0}>
            <Box
              as="span"
              flex={1}
              textAlign={'left'}
              textTransform={'uppercase'}
            >
              Follow Us
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel px={0}>
          <SocialsList />
        </AccordionPanel>
      </AccordionItem>
      <Divider borderColor={'gray2'} />
    </Accordion>
  );
};
