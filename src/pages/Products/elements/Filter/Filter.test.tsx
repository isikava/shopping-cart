import { render, fireEvent } from '@testing-library/react';
import { Filter } from './Filter';

it('renders correctly', () => {
  const categories = ['Category A', 'Category B'];
  const selectedCategories = ['Category A'];

  const handleCategoryChange = vitest.fn();

  const { getByText, getByLabelText } = render(
    <Filter
      categories={categories}
      selectedCategories={selectedCategories}
      onCategoryChange={handleCategoryChange}
    />
  );

  // Check if category checkboxes are rendered
  getByText('Category');
  getByLabelText('Category A');
  getByLabelText('Category B');

  // Simulate changes and check if event handlers are called
  fireEvent.click(getByLabelText('Category B'));
  expect(handleCategoryChange).toHaveBeenCalledWith('Category B');
});
