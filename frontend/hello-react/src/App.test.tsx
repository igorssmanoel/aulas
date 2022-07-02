import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders olá text', () => {
  render(<App />);
  const oiElement = screen.getByText(/Olá/i);
  expect(oiElement).toBeInTheDocument();
});
