import { action } from '@storybook/addon-actions';
import Button from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

//👇 Throws a type error it the args don't match the component props
export const Default: Story = {
  args: {
    disabled: false,
    onClick: action('click'),
    children: 'Add to cart',
  },
};
