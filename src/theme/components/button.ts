export const brandRing = {
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

const baseStyle = {
  rounded: 'none',
  fontFamily: 'heading',
  fontWeight: 'medium',
  textTransform: 'uppercase',
};

const variants = {
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
};

const defaultProps = {
  size: 'md',
  variant: 'solid',
  colorScheme: 'gray',
};

export const Button = {
  baseStyle,
  variants,
  defaultProps,
};
