import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Box } from '@chakra-ui/react';

const Root = () => {
  return (
    <>
      <Header />
      <Box as="main">
        <Outlet />
      </Box>
    </>
  );
};

export default Root;
