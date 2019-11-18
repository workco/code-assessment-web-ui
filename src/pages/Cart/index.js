import React, { useContext } from 'react';
import { css } from 'emotion';
import { useHistory } from 'react-router-dom';

import AppContext from '../../contexts/AppContext';

// These are temporary styles
const styles = {
  wrapper: css({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  inner: css({
    backgroundColor: 'white',
    width: '80%',
    height: '80%'
  })
};

function Cart() {
  const { cartItems, checkout, incrementItem, decrementItem } = useContext(
    AppContext
  );
  const history = useHistory();

  return (
    <div data-testid="cart" className={styles.wrapper}>
      <div className={styles.inner}>
        <button onClick={() => history.goBack()}>Close</button>

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

        {cartItems.length > 0 && <button onClick={checkout}>Checkout</button>}
      </div>
    </div>
  );
}

export default Cart;
