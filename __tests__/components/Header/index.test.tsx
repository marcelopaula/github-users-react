import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from '@/components/Header';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}))

describe('Header component', () => {
  it('renders the Search component', () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });
});