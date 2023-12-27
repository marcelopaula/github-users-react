import '@testing-library/jest-dom'
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Languages from '@/components/Languages';

jest.mock('../../../src/services/Repositories', () => ({
  getLanguages: jest.fn(() => Promise.resolve({ data: { JavaScript: 100, TypeScript: 50 } })),
}));

describe('Languages component', () => {
  it('renders', async () => {
    const { getByText } = render(<Languages url="some-url" />);

    await waitFor(() => {});

    expect(getByText('JavaScript')).toBeInTheDocument();
    expect(getByText('TypeScript')).toBeInTheDocument();
  });
});