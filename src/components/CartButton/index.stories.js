import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { object } from '@storybook/addon-knobs';

import CartButton from './index';

const items = [
  {
    count: 1
  },
  {
    count: 2
  }
];

export default { title: 'CartButton' };

export const regular = () => (
  <Router>
    <Route path="/">
      <CartButton
        cartItems={object('Items', items)}
        location={{ pathname: '/' }}
      />
    </Route>
  </Router>
);
