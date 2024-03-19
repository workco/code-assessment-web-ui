import React from 'react';
// import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import imageTypes from '../../constants/imageTypes';

import Product from './index';

const data = {
  title: 'Orange Rancher Hat',
  price: 45,
  images: [
    {
      type: imageTypes.DEFAULT_RT,
      src: '/assets/orange-rancher-hat/default-rt.jpg',
    },
    {
      type: imageTypes.DEFAULT_SQ,
      src: '/assets/orange-rancher-hat/default-sq.jpg',
    },
  ],
};

export default { title: 'Product' };

export const Regular = () => (
  <Product
    {...data}
    // isFeatured={boolean('Featured', false)}
    onClick={action('Add to Bag')}
  />
);
