import { extendTheme, theme as base } from '@chakra-ui/react';

import { styles } from './styles';
import { colors } from './colors';
import { components } from './components';

const theme = extendTheme({
  fonts: {
    heading: `Oswald, Montserrat, ${base.fonts?.heading}`,
    body: `Roboto, Inter, ${base.fonts?.body}`,
  },
  colors,
  components,
  styles,
});

export default theme;
