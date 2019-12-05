import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Product from './index';

const data = {
  title: 'The Sideswept Dhoti + Bottom Line Grey',
  price: 219.0,
  images: [
    {
      type: 'featured',
      src: '/assets/prod-1-featured.png'
    },
    {
      type: 'default',
      src: '/assets/prod-1-default.png'
    }
  ]
};

export default { title: 'Product' };

export const regular = () => (
  <Product
    {...data}
    isFeatured={boolean('Featured', false)}
    onClick={() => console.log('Add to bag')}
  />
);
