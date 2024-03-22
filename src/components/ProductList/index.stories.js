import React from 'react';
import { action } from '@storybook/addon-actions';

import mockProducts from '../../mocks/products';

import ProductList from './index';

const products = mockProducts.slice(0, 5);

export default {
  component: ProductList,
};

export const Default = {
  name: 'ProductList',
  render: () => (
    <ProductList
      addItem={action('Add to Bag')}
      cartItems={[]}
      products={products}
    />
  ),
};
