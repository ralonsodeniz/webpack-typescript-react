import { render, screen } from '@testing-library/react';
import Heading from '../heading';

test('Header contains correct text', () => {
  render(<Heading />);
  const text = screen.getByText('My React and TypeScript App');
  expect(text).toBeInTheDocument();
});
