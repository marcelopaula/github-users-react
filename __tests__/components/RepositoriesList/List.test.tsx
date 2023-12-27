// List.test.tsx
import React from 'react';
import { render, fireEvent, cleanup, screen, waitFor } from '@testing-library/react';
import List from '../../../src/components/RepositoriesList/List';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(() => Promise.resolve(true)),
  })
}))

afterEach(cleanup)

describe('List component', () => {
  const mockData = [
    {
      id: 1,
      name: 'Repo1',
      description: 'Description1',
      stargazers_count: 10,
    },
    {
      id: 2,
      name: 'Repo2',
      description: 'Description2',
      stargazers_count: 20,
    },
  ];

  it('renders', () => {
    const { getByText } = render(<List data={mockData} />);

    expect(getByText('Repo1')).toBeInTheDocument();
    expect(getByText('Description1')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();

    expect(getByText('Repo2')).toBeInTheDocument();
    expect(getByText('Description2')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
  });

  it('Button is clicked', async () => {
    const handleClickViewMock = jest.fn();

    const { getByTestId } = render(
      <List data={mockData} handleClickView={handleClickViewMock} />
    );

    const button = getByTestId('button-0');
    
    fireEvent.click(button);

    
    waitFor(() => {
      expect(handleClickViewMock).toHaveBeenCalledTimes(1);
    });
    expect(button).toBeInTheDocument();
    
  });
});
