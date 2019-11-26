import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import CartButton from './index';

export default { title: 'CartButton' };

export const regular = () => (
  <CartButton disabled={boolean('Disabled', false)}>Add to bag</CartButton>
);
