import { HStack, IconButton } from '@chakra-ui/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

type Props = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'brand' | 'second';
};

export const Paginate = ({ variant = 'second', size = 'md' }: Props) => {
  return (
    <HStack spacing={1}>
      <IconButton
        aria-label="prev page"
        variant={variant}
        size={size}
        icon={<BsChevronLeft />}
      />
      <IconButton
        aria-label="next page"
        variant={variant}
        size={size}
        icon={<BsChevronRight />}
      />
    </HStack>
  );
};
