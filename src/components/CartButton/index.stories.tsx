import CartButton from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CartButton> = {
  component: CartButton,
};

export default meta;

type Story = StoryObj<typeof CartButton>;

export const Default: Story = {
  args: {
    cartQuantity: 1,
  },
};
