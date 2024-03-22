import React from 'react';
import { action } from '@storybook/addon-actions';

import Quantity from './index';

export default {
  component: Quantity,
  argTypes: { count: { control: 'number' } },
};

export const Primary = {
  name: 'Quantity',
  render: (args) => (
    <Quantity
      count={args.count || 1}
      onIncrement={action('on increment')}
      onDecrement={action('on decrement')}
    />
  ),
};
