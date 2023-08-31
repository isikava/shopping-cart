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
    <VStack as={'aside'} align={'flex-start'}>
      <Heading fontSize={['sm', 'md', 'xl']} mb={[2, 4, 6]}>
        Category
      </Heading>
      <CheckboxGroup size={['sm', 'md']} value={selectedCategories}>
        <VStack align={'flex-start'} spacing={[1, 4]}>
          {categories.map((c: any) => {
            return (
              <Checkbox
                key={c}
                value={c}
                onChange={() => onCategoryChange(c)}
                textTransform={'capitalize'}
              >
                {c}
              </Checkbox>
            );
          })}
        </VStack>
      </CheckboxGroup>
    </VStack>
  );
};
