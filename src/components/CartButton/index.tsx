import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import bag from '../../assets/bag.svg';

import styles from './CartButton.module.scss';

export interface Props {
  cartQuantity: number;
  className?: string;
}

const CartButton: React.FC<Props> = ({ className = '', cartQuantity }) => {
  const buttonClasses = cx(
    styles.button,
    { [styles.empty]: !cartQuantity },
    className,
  );

  return (
    <Link to="/cart" className={buttonClasses}>
      <span className={styles.icon}>
        <img src={bag} alt="shopping bag" />
      </span>
      {!!cartQuantity && (
        <span className={styles.quantity}>{cartQuantity}</span>
      )}
    </Link>
  );
};

export default CartButton;
