import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Product from './index';

const data = {
  title: 'Floral Dress',
  price: 219.0,
  images: [
    {
      type: 'featured',
      src: '/assets/prod-1-featured.jpg'
    },
    {
      type: 'default',
      src: '/assets/prod-1-default.jpg'
    }
  ]
};

export default { title: 'Product' };

export const regular = () => (
  <Product
    {...data}
    isFeatured={boolean('Featured', false)}
    onClick={action('Add to Bag')}
  />
);
