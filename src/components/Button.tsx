import { Button as CButton, ButtonProps } from '@chakra-ui/react';

type Props = ButtonProps & {
  variant?: 'brand' | 'second' | 'transp';
};

export const Button = ({ variant = 'brand', children, ...rest }: Props) => {
  const size = { base: '-sm', md: '-md' };

  return (
    <CButton variant={variant} size={size} {...rest}>
      {children}
    </CButton>
  );
};
