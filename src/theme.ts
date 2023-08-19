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

const brandStyle = {
  ...brandRing,
  h: '50px',
  minW: '150px',
  fontSize: 'sm',
  px: 6,
  py: 4,
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
      main: '#E6F1FA',
      advanced: '#57A4EB',
      divider: '#C4C4C4',
      dark2: '#3F3F3F',
      gray1: '#828282',
      lighthover: '#F0F2F2',
      link: '#0F6DB1',
    },
    fonts: {
      heading: `Oswald, Montserrat, ${base.fonts?.heading}`,
      body: `Roboto, Inter, ${base.fonts?.body}`,
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
        baseStyle: {
          rounded: 'none',
          fontFamily: 'heading',
          fontWeight: 'medium',
          textTransform: 'uppercase',
        },
        sizes: {},
        variants: {
          primary: {
            ...brandStyle,
            color: 'white',
            bg: 'black',
            _hover: {
              bg: 'brand.400',
            },
            _active: {
              bg: 'brand.600',
            },
          },
          secondary: {
            ...brandStyle,
            color: 'dark2',
            bg: 'white',
            border: '2px solid',
            borderColor: 'divider',
            _hover: {
              borderColor: 'currentColor',
            },
          },
          sm: {
            ...brandRing,
            color: 'gray1',
            bg: 'lighthover',
            border: '2px solid',
            borderColor: 'divider',
            h: '40px',
            minW: '114px',
            _hover: {
              borderColor: 'currentColor',
            },
          },
        },
        defaultProps: {
          size: 'md',
          variant: 'solid',
          colorScheme: 'gray',
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
