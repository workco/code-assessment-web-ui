import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from './index';

export default { title: 'Button' };

export const regular = () => (
  <Button disabled={boolean('Disabled', false)} onClick={action('on-click')}>
    Add to Bag
  </Button>
);
