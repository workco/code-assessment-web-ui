import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppContext from '../../contexts/AppContext';
import bag from '../../assets/bag.svg';

import styles from './CartButton.module.scss';

const CartButton = ({ className }) => {
  const { cartItems } = useContext(AppContext);
  const location = useLocation();
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <Link
      to={{ pathname: 'cart', state: { background: location } }}
      className={className}
    >
      <div className={styles.icon}>
        <img src={bag} alt="shopping bag" />
      </div>
      <div className={styles.quantity}>{cartQuantity}</div>
    </Link>
  );
};

export default CartButton;
