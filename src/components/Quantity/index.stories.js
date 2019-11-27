import React from 'react';

import Quantity from './index';

export default { title: 'Quantity' };

export const regular = () => (
  <Quantity onIncrement={() => {}} onDecrement={() => {}} count={0} />
);
