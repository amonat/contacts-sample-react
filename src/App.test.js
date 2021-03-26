import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Contact Tracker/i);
  expect(headerElement).toBeInTheDocument();
});
