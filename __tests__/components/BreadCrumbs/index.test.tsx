import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import BreadCrumbs from '@/components/BreadCrumbs'

const mockStore = configureStore()

describe('BreadCrumbs component', () => {
  const store = mockStore({
    user: {
      login: 'facebook'
    }
  })

  it('Render', () => {
    

    const { getByText } = render(
      <Provider store={store}>
        <BreadCrumbs />
      </Provider>
    )
    expect(getByText('Pesquisar')).toBeInTheDocument();
    expect(getByText('facebook')).toBeInTheDocument();
  });

  it('Render with repo props', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BreadCrumbs repo='nome do repositorio' />
      </Provider>
    )
    expect(getByText('Pesquisar')).toBeInTheDocument();
    expect(getByText('facebook')).toBeInTheDocument();
    expect(getByText('nome do repositorio')).toBeInTheDocument();
  })
})