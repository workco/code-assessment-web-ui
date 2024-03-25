import { action } from '@storybook/addon-actions';

import Quantity from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Quantity> = {
  component: Quantity,
};

export default meta;

type Story = StoryObj<typeof Quantity>;

export const Default: Story = {
  args: {
    count: 12,
    onIncrement: action('on increment'),
    onDecrement: action('on decrement'),
  },
};
