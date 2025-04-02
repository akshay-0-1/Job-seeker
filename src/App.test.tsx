import React from 'react';
import App from './App';

import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
