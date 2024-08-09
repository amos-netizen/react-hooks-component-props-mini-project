import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the correct child components', () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector("header")).toBeInTheDocument();
  expect(container.querySelector("aside")).toBeInTheDocument();
  expect(container.querySelector("main")).toBeInTheDocument();
});
