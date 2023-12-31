export const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500',
  },
};

const baseStyle = {
  rounded: 'none',
  fontFamily: 'heading',
  fontWeight: 'medium',
  textTransform: 'uppercase',
};

const sizes = {
  sm: {
    fontSize: 'xs',
  },
  md: {
    fontSize: 'sm',
  },
  '-sm': {
    fontSize: 'xs',
    h: '40px',
    px: 6,
  },
  '-md': {
    fontSize: 'sm',
    h: '50px',
    px: 10,
  },
};

const variants = {
  brand: {
    ...brandRing,
    color: 'white',
    bg: 'black',
    _hover: {
      bg: 'brand.500',
    },
    _active: {
      bg: 'brand.700',
    },
  },
  second: {
    ...brandRing,
    color: 'dark2',
    bg: 'white',
    border: '2px solid',
    borderColor: 'divider',
    _hover: {
      borderColor: 'gray1',
    },
  },
  transp: {
    color: 'black',
    bg: 'transparent',
    border: '2px solid',
    borderColor: 'black',
    _hover: {
      boxShadow: 'md',
    },
  },
  transpWhite: {
    color: 'white',
    bg: 'transparent',
    border: '2px solid',
    borderColor: 'white',
    _hover: {
      boxShadow: 'md',
    },
  },
  muted: {
    ...brandRing,
    color: 'gray1',
    bg: 'lighthover',
    border: '2px solid',
    borderColor: 'divider',
    _hover: {
      borderColor: 'currentColor',
    },
  },
  icon: {
    color: 'black',
    bg: 'main',
    fontSize: 'xs',
    fontFamily: 'body',
    fontWeight: 'normal',

    _hover: {
      bg: '#D0E4F2',
    },
  },
};

export const Button = {
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'gray',
  },
};
