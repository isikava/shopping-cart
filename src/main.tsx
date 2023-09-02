import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { ShopProvider } from './context/ShopContext';
import { Router } from './pages/Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ShopProvider>
        <Router />
      </ShopProvider>
    </ChakraProvider>
  </React.StrictMode>
);
