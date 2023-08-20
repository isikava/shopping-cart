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
    px: 4,
  },
  '-md': {
    fontSize: 'sm',
    h: '50px',
    px: 8,
  },
};

const variants = {
  primary: {
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
  secondary: {
    ...brandRing,
    color: 'dark2',
    bg: 'white',
    border: '2px solid',
    borderColor: 'divider',
    _hover: {
      borderColor: 'currentColor',
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
