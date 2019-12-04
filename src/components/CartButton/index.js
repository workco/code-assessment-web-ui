import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import bag from '../../assets/bag.svg';

import styles from './CartButton.module.scss';

const CartButton = ({ className, cartQuantity, location }) => {
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

CartButton.propTypes = {
  cartQuantity: PropTypes.number,
  className: PropTypes.string,
  location: PropTypes.object.isRequired
};

export default CartButton;
