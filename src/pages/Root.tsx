import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Box } from '@chakra-ui/react';
import { Footer } from '@/components/Footer';

const Root = () => {
  return (
    <>
      <Header />
      <Box as="main">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Root;
