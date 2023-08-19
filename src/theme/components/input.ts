const inputSelectStyles = {
  baseStyle: {
    field: {
      borderRadius: 'none',
      outline: 0,
    },
  },
  variants: {
    outline: {
      field: {
        border: '1px',
        borderColor: 'divider',
        _hover: {
          borderColor: 'gray1',
        },
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
