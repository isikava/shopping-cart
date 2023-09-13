import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    fontFamily: 'heading',
    border: 0,
  },
  container: {
    border: 0,
  },
  panel: {
    border: 0,
  },
});

const light = definePartsStyle({
  container: {
    bg: '#F8F9FB',
    color: 'black',
  },
  panel: {
    background: 'gray.50',
  },
  button: {
    _hover: {
      bg: 'lighthover',
    },
  },
});

const dark = definePartsStyle({
  container: {
    bg: 'black',
    color: 'white',
  },
  panel: {
    background: 'black',
  },
  button: {
    _hover: {
      bg: 'gray.900',
    },
  },
  icon: {
    color: 'dark2',
    _hover: {
      color: 'white',
    },
  },
});

export const Accordion = defineMultiStyleConfig({
  baseStyle,
  variants: { light, dark },
});
