import { Button as CButton, ButtonProps, forwardRef } from '@chakra-ui/react';

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const { children, ...rest } = props;
  const size = { base: '-sm', md: '-md' };

  return (
    <CButton size={size} ref={ref} {...rest}>
      {children}
    </CButton>
  );
});
