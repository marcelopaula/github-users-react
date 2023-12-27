// RepositoriesList.test.tsx
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RepositoriesList from '@/components/RepositoriesList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { getRepositories } from '@/services/Repositories';

const mockStore = configureStore();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

jest.mock('../../../src/services/Repositories', () => ({
  getRepositories: jest.fn(() => Promise.resolve({ data: { items: [] } })),
}));

describe('RepositoriesList component', () => {
  const store = mockStore({
    user: {
      login: 'exampleUser',
    }
  });
  
  it('renders repositories list correctly', async () => {

    const { getByText } = render(
      <Provider store={store}>
        <RepositoriesList />
      </Provider>
    );

    await waitFor(() => {});

    expect(getByText('Repositórios')).toBeInTheDocument();
  });

  it('calls getRepositories with the correct user login', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <RepositoriesList />
      </Provider>
    );

    // Wait for the component to finish loading (handle async operations)
    await waitFor(() => {});

    // Assert that getRepositories was called with the correct user login
    expect(getRepositories).toHaveBeenCalledWith('exampleUser');
  });
});
