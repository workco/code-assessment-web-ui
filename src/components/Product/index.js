import React from 'react';
import cx from 'classnames';

import Button from '../Button';
import Quantity from '../Quantity';

import { getImage } from '../../utils/images';

import styles from './Product.module.scss';

const Product = ({
  className,
  count,
  images,
  isFeatured,
  onClick,
  onDecrement,
  onIncrement,
  price,
  title
}) => {
  const isInCart = onIncrement && onDecrement;
  const productClasses = cx(className, styles.product, {
    [styles.inCart]: isInCart,
    [styles.featured]: isFeatured
  });

  const imageSrc = isFeatured ? getImage(images, 'featured') : getImage(images);

  return (
    <div className={productClasses}>
      <img className={styles.image} src={imageSrc} alt={title} />
      <div className={styles.details}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.price}>${price}</span>
        </div>
        {isInCart ? (
          <Quantity
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            count={count}
          />
        ) : (
          <Button className={styles.addButton} onClick={onClick}>
            Add to bag
          </Button>
        )}
      </div>
    </div>
  );
};

export default Product;
