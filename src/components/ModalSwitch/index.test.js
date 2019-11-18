import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ModalSwitch from './index';

// Mock pages because we only care which is rendered, not the content
jest.mock('../../pages/ProductLanding', () => () => <div data-testid="plp" />);
jest.mock('../../pages/Cart', () => () => <div data-testid="cart" />);

const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => render(<Router history={history}>{ui}</Router>);

describe('ModalSwitch', () => {
  it('renders PLP by default', () => {
    const { queryByTestId } = renderWithRouter(<ModalSwitch />);
    expect(queryByTestId('plp')).toBeTruthy();
    expect(queryByTestId('cart')).toBe(null);
  });

  it('renders PLP on direct navigate to cart', () => {
    const { queryByTestId } = renderWithRouter(<ModalSwitch />, {
      route: '/cart'
    });

    expect(queryByTestId('plp')).toBeTruthy();
    expect(queryByTestId('cart')).toBe(null);
  });

  it('renders cart with PLP in the background', () => {
    const { queryByTestId } = renderWithRouter(<ModalSwitch />, {
      route: {
        pathname: '/cart',
        state: { background: { pathname: '/' } }
      }
    });
    expect(queryByTestId('plp')).toBeTruthy();
    expect(queryByTestId('cart')).toBeTruthy();
  });
});
