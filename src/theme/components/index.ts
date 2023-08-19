import { Button, brandRing } from './button';
import { Input, Select } from './input';

export const components = {
  Button,
  Input,
  Select,
  Checkbox: {
    baseStyle: {
      control: {
        borderRadius: 'none',
        ...brandRing,
      },
    },
  },
};
