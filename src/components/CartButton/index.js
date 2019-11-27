import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import bag from '../../assets/bag.svg';

import styles from './CartButton.module.scss';

const CartButton = ({ className, cartItems, location }) => {
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <Link
      to={{ pathname: 'cart', state: { background: location } }}
      className={cx(styles.button, className)}
    >
      <div className={styles.icon}>
        <img src={bag} alt="shopping bag" />
      </div>
      <div className={styles.quantity}>{cartQuantity}</div>
    </Link>
  );
};

export default CartButton;
