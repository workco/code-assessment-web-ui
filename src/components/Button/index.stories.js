import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Button from './index';

export default { title: 'Button' };

export const regular = () => (
  <Button disabled={boolean('Disabled', false)}>Add to bag</Button>
);
