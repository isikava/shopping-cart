import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.400',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.400',
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        '50': '#FCE8E8',
        '100': '#F7BFBF',
        '200': '#F29797',
        '300': '#ED6E6E',
        '400': '#E84545',
        '500': '#E31C1C',
        '600': '#B61616',
        '700': '#881111',
        '800': '#5B0B0B',
        '900': '#2D0606',
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',
            ...brandRing,
          },
        },
      },
      Button: {
        variants: {
          primary: {
            rounded: 'none',
            ...brandRing,
            color: 'white',
            bg: 'brand.400',
            _hover: {
              bg: 'brand.500',
            },
            _active: {
              bg: 'brand.600',
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  })
);

export default theme;
