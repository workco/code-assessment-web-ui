import React, { useContext } from 'react';

import CartContext from '../../contexts/CartContext';
import ProductContext from '../../contexts/ProductContext';

// TODO Make this a modal, toggle visibility
function Cart() {
  const { cartItems } = useContext(CartContext);
  const { removeItem } = useContext(ProductContext);

  return (
    <div>
      <h1>Cart</h1>

      <ul>
        {cartItems.map(cartItem => {
          const { id, title, count } = cartItem;
          return (
            <li key={id}>
              <h2>{title}</h2>
              <span>{count}</span>
              <button onClick={() => removeItem(cartItem)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
