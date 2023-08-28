import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Box } from '@chakra-ui/react';

type RootProps = {
  cart: ICartItem[];
};

const Root = ({ cart }: RootProps) => {
  return (
    <>
      <Header cart={cart} />
      <Box as="main">
        <Outlet />
      </Box>
    </>
  );
};

export default Root;
