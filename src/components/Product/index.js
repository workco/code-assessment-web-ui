import React from 'react';
import cx from 'classnames';

import Button from '../Button';

import { getImage } from '../../utils/images';

import styles from './Product.module.pcss';

const Product = ({
  className,
  count,
  images,
  onClick,
  onDecrement,
  onIncrement,
  price,
  title
}) => {
  const isInCart = onIncrement && onDecrement;
  const productClasses = cx(className, styles.product, {
    [styles.inCart]: isInCart
  });

  return (
    <li className={productClasses}>
      <img className={styles.image} src={getImage(images)} alt={title} />
      <div className={styles.details}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.price}>${price}</span>
        </div>
        {onIncrement && onDecrement ? (
          <div className={styles.cartButtons}>
            <button
              className={cx(styles.buttonLeft, styles.cartButton)}
              onClick={onIncrement}
            >
              +
            </button>
            <span>{count}</span>
            <button
              className={cx(styles.buttonRight, styles.cartButton)}
              onClick={onDecrement}
            >
              -
            </button>
          </div>
        ) : (
          <Button onClick={onClick}>Add to bag</Button>
        )}
      </div>
    </li>
  );
};

export default Product;
