import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { CartProvider } from './context/CartContext';
import { Router } from './pages/Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Router />
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
