import { Text, TextProps, useMediaQuery } from '@chakra-ui/react';

export const OutlineText = ({ children }: TextProps) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const spanStyle = isLargerThan800
    ? {
        WebkitTextStroke: '2px black',
        color: 'transparent',
      }
    : { color: 'black' };

  return (
    <Text as="span" style={spanStyle}>
      {children}
    </Text>
  );
};
