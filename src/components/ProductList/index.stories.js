import React from 'react';
import { action } from '@storybook/addon-actions';

import mockProducts from '../../mocks/products';

import ProductList from './index';

const products = mockProducts.slice(0, 5);

export default { title: 'ProductList' };

export const regular = () => (
  <ProductList
    addItem={action('Add to Bag')}
    cartItems={[]}
    products={products}
  />
);
