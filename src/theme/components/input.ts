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

export const Select = {
  ...inputSelectStyles,
};

export const Input = {
  ...inputSelectStyles,
};
