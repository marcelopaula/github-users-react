import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import User from '../../../src/components/User';
import configureStore from 'redux-mock-store'

const mockStore = configureStore();

describe('User component', () => {

  const store = mockStore({
    user: {
      name: 'Marcelo',
      avatar_url: 'https://example.com/avatar.jpg',
      bio: 'Lorem ipsum',
      followers: 100,
      following: 50,
    }
  });
  it('renders user information correctly', async () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <User />
      </Provider>
    );
    
    expect(getByText('Marcelo')).toBeInTheDocument();
    expect(getByText('Bio: Lorem ipsum')).toBeInTheDocument();
    expect(getByText('Seguidores: 100')).toBeInTheDocument();
    expect(getByText('Seguindo: 50')).toBeInTheDocument();
  });
});