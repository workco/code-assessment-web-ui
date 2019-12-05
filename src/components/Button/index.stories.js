import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Button from './index';

export default { title: 'Button' };

export const regular = () => (
  <Button
    disabled={boolean('Disabled', false)}
    onClick={() => console.log('onClick!')}
  >
    Add to bag
  </Button>
);
