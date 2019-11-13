import React, { useContext } from 'react';

import AppContext from '../../contexts/app/context';

// TODO Make this a modal, toggle visibility
function Cart() {
  const { cartItems, incrementItem, decrementItem } = useContext(AppContext);

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
              <button onClick={() => incrementItem(cartItem)}>+</button>
              <button onClick={() => decrementItem(cartItem)}>-</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
