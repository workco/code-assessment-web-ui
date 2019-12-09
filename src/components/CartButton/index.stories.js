import React from 'react';
import { number } from '@storybook/addon-knobs';

import CartButton from './index';

export default { title: 'CartButton' };

export const regular = () => (
  <CartButton cartQuantity={number('Quantity', 3)} />
);
