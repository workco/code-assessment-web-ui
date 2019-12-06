import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { number } from '@storybook/addon-knobs';

import CartButton from './index';

export default { title: 'CartButton' };

export const regular = () => (
  <Router>
    <Route path="/">
      <CartButton cartQuantity={number('Quantity', 3)} />
    </Route>
  </Router>
);
