import {
  NumberInput,
  HStack,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
} from '@chakra-ui/react';

export const Counter = () => {
  const stepper = {
    fontSize: '2xl',
    color: 'divider',
    border: 'none',
    w: 10,
    h: 10,
    _hover: { bg: 'lighthover', color: 'gray1' },
  };

  return (
    <NumberInput defaultValue={1} min={1} allowMouseWheel>
      <HStack
        spacing={0}
        border={'1px'}
        borderColor={'divider'}
        _hover={{ borderColor: 'gray1' }}
      >
        <NumberDecrementStepper
          children="-"
          style={{ margin: 0 }}
          {...stepper}
        />
        <NumberInputField
          borderRadius={0}
          border={'none'}
          w={10}
          p={2}
          h={10}
        />
        <NumberIncrementStepper
          children="+"
          style={{ margin: 0 }}
          {...stepper}
        />
      </HStack>
    </NumberInput>
  );
};
