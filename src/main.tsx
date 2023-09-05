import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { CartProvider } from './context/CartProvider';
import { Router } from './pages/Router';
import { CacheProvider } from './context/CacheProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CacheProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </CacheProvider>
    </ChakraProvider>
  </React.StrictMode>
);
