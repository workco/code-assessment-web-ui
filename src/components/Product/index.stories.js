import { action } from '@storybook/addon-actions';
import imageTypes from '../../constants/imageTypes';
import Product from './index';

const data = {
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

export default {
  component: Product,
  argTypes: {
    isFeatured: { control: 'boolean' },
    title: { control: 'text' },
    price: { control: 'number' },
    count: { control: 'number' },
  },
};

export const Default = {
  name: 'Product',
  render: (args) => (
    <Product
      images={data.images}
      isFeatured={args.isFeatured}
      title={args.title || 'Orange Rancher Hat'}
      price={args.price || '45'}
      onClick={action('Add to Bag')}
      count={args.count}
    />
  ),
};
