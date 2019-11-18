import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { createMemoryHistory } from 'history';
// move to test setup

import AppContext from '../../contexts/AppContext';
import useAppContext from '../../hooks/useAppContext';
import { theme } from '../../theme';

import ModalSwitch from './index';

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
}

const Wrapper = ({ children }) => {
  const appContextValue = useAppContext();
  // TODO Make some of this its own component
  return (
    <AppContext.Provider value={appContextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

describe('ModalSwitch', () => {
  it('renders PLP by default', () => {
    const { queryByTestId } = renderWithRouter(
      <Wrapper>
        <ModalSwitch />
      </Wrapper>
    );
    expect(queryByTestId('plp')).toBeTruthy();
    expect(queryByTestId('cart')).toBe(null);
  });

  it('renders PLP on direct navigate to cart', () => {
    const { queryByTestId } = renderWithRouter(
      <Wrapper>
        <ModalSwitch />
      </Wrapper>,
      { route: '/cart' }
    );

    expect(queryByTestId('plp')).toBeTruthy();
    expect(queryByTestId('cart')).toBe(null);
  });

  it('renders cart with PLP in the background', () => {
    const { queryByTestId } = renderWithRouter(
      <Wrapper>
        <ModalSwitch />
      </Wrapper>,
      {
        route: {
          pathname: '/cart',
          state: { background: { pathname: '/' } }
        }
      }
    );
    expect(queryByTestId('plp')).toBeTruthy();
    expect(queryByTestId('cart')).toBeTruthy();
  });
});
