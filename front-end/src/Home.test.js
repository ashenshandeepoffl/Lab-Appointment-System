import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Home from './Components/Home';

test('renders Home component', () => {
  const { getByText, getAllByAltText } = render(<Home />);

  // Check if the text and images are present in the rendered component
  const welcomeText = getByText('Welcome to the ABC Laboratory');
  expect(welcomeText).toBeInTheDocument();

  const labImageElements = getAllByAltText('Lab interior with equipment');
  expect(labImageElements.length).toBe(1);

});
