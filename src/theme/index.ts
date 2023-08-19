import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';

const theme = extendTheme(
  {
    fonts: {
      heading: `Oswald, Montserrat, ${base.fonts?.heading}`,
      body: `Roboto, Inter, ${base.fonts?.body}`,
    },
    colors,
    components,
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  })
  // withDefaultVariant({
  //   variant: 'filled',
  //   components: ['Input', 'Select'],
  // })
);

export default theme;
