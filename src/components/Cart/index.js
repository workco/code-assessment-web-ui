import React, { useContext } from 'react';

import CartContext from '../../contexts/CartContext';

// TODO Make this a modal, toggle visibility
function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>

      <ul>
        {cartItems.map(({ id, title, count }) => (
          <li key={id}>
            <h2>{title}</h2>
            <span>{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
