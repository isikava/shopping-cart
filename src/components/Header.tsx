import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box as="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </Box>
  );
};
