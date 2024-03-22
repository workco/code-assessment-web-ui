import React from 'react';

import CartButton from './index';

export default {
  component: CartButton,
  argTypes: { cartQuantity: { control: 'number' } },
};

export const Regular = {
  name: 'CartButton',
  render: (args) => <CartButton cartQuantity={args.cartQuantity} />,
};
