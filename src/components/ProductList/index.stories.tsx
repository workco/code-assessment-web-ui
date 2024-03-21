import { action } from '@storybook/addon-actions';

import ProductList from './index';
import type { Meta, StoryObj } from '@storybook/react';
import { mockProducts } from '../../mocks/dataMapper';

const products = mockProducts.slice(0, 5);

const meta: Meta<typeof ProductList> = {
  component: ProductList,
};

export default meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: {
    addItem: action('Add to Bag'),
    cartItems: [],
    products,
  },
};
