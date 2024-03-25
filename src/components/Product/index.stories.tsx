import { action } from '@storybook/addon-actions';
import imageTypes from '../../constants/imageTypes';
import Product from './index';
import type { Meta, StoryObj } from '@storybook/react';

const images = [
  {
    type: imageTypes.DEFAULT_RT,
    src: '/assets/orange-rancher-hat/default-rt.jpg',
  },
  {
    type: imageTypes.DEFAULT_SQ,
    src: '/assets/orange-rancher-hat/default-sq.jpg',
  },
];

const meta: Meta<typeof Product> = {
  component: Product,
};

export default meta;

type Story = StoryObj<typeof Product>;

export const Default: Story = {
  args: {
    isFeatured: true,
    title: 'Orange Rancher Hat',
    price: 45,
    count: 1,
    images,
    onClick: action('click'),
  },
};
