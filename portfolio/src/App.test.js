import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, I\'m Daniel 👋', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, I'm Daniel 👋/i);
  expect(linkElement).toBeInTheDocument();
});
