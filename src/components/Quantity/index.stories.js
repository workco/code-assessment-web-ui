import React from 'react';
import { action } from '@storybook/addon-actions';

import Quantity from './index';

export default { title: 'Quantity' };

export const Regular = () => (
  <Quantity
    onIncrement={action('on increment')}
    onDecrement={action('on decrement')}
    count={0}
  />
);
