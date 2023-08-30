import { VStack, Heading, CheckboxGroup, Checkbox } from '@chakra-ui/react';

type FilterProps = {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
};

export const Filter = ({
  categories,
  selectedCategories,
  onCategoryChange,
}: FilterProps) => {
  return (
    <VStack
      as={'aside'}
      align={'flex-start'}
      borderRight={{ lg: '2px solid #C4C4C4' }}
    >
      <Heading fontSize={['sm', 'md']} mb={2}>
        Category
      </Heading>
      <CheckboxGroup size={['sm', 'md']}>
        <VStack align={'flex-start'} spacing={[1, 4]}>
          {categories.map((c: any) => (
            <Checkbox
              key={c}
              value={c}
              isChecked={selectedCategories.includes(c)}
              onChange={() => onCategoryChange(c)}
              textTransform={'capitalize'}
            >
              {c}
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
    </VStack>
  );
};
