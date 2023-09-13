import {
  Box,
  Button as CButton,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  VStack,
  Select,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Image,
} from '@chakra-ui/react';
import { Button } from '@/components/Button';
import { BiHeart } from 'react-icons/bi';
import { Paginate } from '@/components/Paginate';
import { Counter } from '@/components/Counter';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Img } from '@/components/Img';

const Components = () => {
  return (
    <Container maxW={'container.xl'} pb={96}>
      <VStack spacing={6} align={'stretch'}>
        <Heading size={'xl'}>Forms</Heading>
        <FormControl>
          <FormLabel>Idle</FormLabel>
          <Input placeholder="Naruto" />
        </FormControl>
        <FormControl>
          <FormLabel>Focused</FormLabel>
          <Input placeholder="Naruto" />
        </FormControl>
        <FormControl>
          <FormLabel>Select</FormLabel>
          <Select>
            <option value="fire">Fire</option>
            <option value="wind">Wind</option>
          </Select>
        </FormControl>

        <Heading size={'xl'}>Buttons</Heading>
        <HStack align={'flex-start'}>
          <VStack spacing={4} align="center">
            <CButton colorScheme="teal" variant="solid">
              Chakra
            </CButton>
            <CButton colorScheme="teal" variant="outline">
              Chakra
            </CButton>
            <CButton colorScheme="teal" variant="ghost">
              Chakra
            </CButton>
            <CButton colorScheme="teal" variant="link">
              Chakra
            </CButton>
          </VStack>
          <VStack>
            <CButton variant={'muted'} size={'sm'}>
              Apply
            </CButton>
            <CButton variant={'outline'}>Outline</CButton>
          </VStack>
          <VStack>
            <Button as={Link} to="/" variant={'brand'}>
              Add to bag
            </Button>
            <CButton
              as={Link}
              to="/"
              variant={'brand'}
              size={{ base: '-sm', md: '-md' }}
            >
              Add to bag
            </CButton>
            <Button variant={'second'} leftIcon={<BiHeart />}>
              My button
            </Button>
            <Button variant={'transp'}>Transparent</Button>
            <CButton variant={'solid'}>Solid</CButton>
          </VStack>
          <VStack>
            <Button variant={'second'}>♥ Save</Button>
            <CButton variant={'outline'}>♥ Outline</CButton>
          </VStack>
        </HStack>

        <HStack align={'flex-start'} spacing={6}>
          <VStack>
            <Heading>Checkboxes</Heading>
            <HStack>
              <VStack spacing={6} align={'flex-start'}>
                <Checkbox>State 1</Checkbox>
                <Checkbox>Hover</Checkbox>
                <Checkbox defaultChecked>Checked</Checkbox>
              </VStack>
              <RadioGroup defaultValue="3">
                <VStack spacing={6} align={'flex-start'}>
                  <Radio value="1">Radio</Radio>
                  <Radio value="2">Hover</Radio>
                  <Radio value="3">Checked</Radio>
                </VStack>
              </RadioGroup>
            </HStack>
          </VStack>

          <VStack>
            {' '}
            <Heading>Counter</Heading>
            <Counter />
          </VStack>

          <VStack>
            <Heading>Paginate</Heading>
            <Paginate variant="brand" size="lg" />
            <Paginate variant="second" />
          </VStack>
        </HStack>

        <Heading>Alerts</Heading>
        <Alert status="success">
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your application has been received. We will review your
              application and respond within the next 48 hours.
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
          />
        </Alert>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>

        <Heading>Accordion</Heading>
        <Accordion w={'full'} allowToggle variant={'light'}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={3}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize={'sm'} />
                    ) : (
                      <AddIcon fontSize={'sm'} />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion w={'full'} allowToggle variant={'dark'}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={3}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize={'sm'} />
                    ) : (
                      <AddIcon fontSize={'sm'} />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Heading>Images</Heading>
        <VStack>
          <Heading>Chakra </Heading>
          <Box w={'full'}>
            {/* native aspect-raio with width and height not working */}
            <Image
              srcSet="img/hero-250.webp 480w, img/hero-850.webp 1980w"
              width={400}
              height={400}
            />
          </Box>
        </VStack>

        <VStack>
          <Heading>Custom Img</Heading>
          {/* it works */}
          <Box w={'full'}>
            <Img
              srcSet="img/hero-250.webp 480w, img/hero-850.webp 1980w"
              width={852}
              height={757}
            />
          </Box>
        </VStack>

        <VStack>
          <Heading>Native</Heading>
          <img
            srcSet="img/hero-250.webp 480w, img/hero-850.webp 1980w"
            width="852"
            height="757"
          />
        </VStack>

        <VStack>
          <Heading>Img fill</Heading>
          <Flex position={'relative'} w={'500px'} h={'500px'}>
            <Img src="img/hero-850.webp" fill />
          </Flex>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Components;
