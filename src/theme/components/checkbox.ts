export const controlStyle = {
  _hover: {
    borderColor: 'dark2',
  },
  _checked: {
    bg: 'black',
    borderColor: 'black',
    _hover: {
      bg: 'brand.500',
      borderColor: 'brand.500',
    },
  },
};

export const Checkbox = {
  baseStyle: {
    control: {
      borderRadius: 'none',
      ...controlStyle,
    },
  },
};
