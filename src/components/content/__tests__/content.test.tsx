import { render, screen } from '@testing-library/react';
import Content from '../content';

test('Content contains var image', () => {
  render(<Content />);
  const car = screen.getByAltText('car');
  expect(car).toBeInTheDocument();
});
