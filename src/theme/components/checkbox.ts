import { brandRing } from './button';

export const Checkbox = {
  baseStyle: {
    control: {
      ...brandRing,
      borderRadius: 'none',
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
    },
  },
};
