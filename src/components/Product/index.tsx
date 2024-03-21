import React from 'react';
import cx from 'classnames';

import Button from '../Button/index';
import Quantity from '../Quantity/index';

import { getImage } from '../../utils/images';

import styles from './Product.module.scss';
import { IProduct } from '../../hooks/useAppContext';
import imageTypes from '../../constants/imageTypes';

interface IProductProps extends IProduct {
  isAdded?: boolean;
  isFeatured?: boolean;
  onClick?: () => void;
  onDecrement?: () => void;
  onIncrement?: () => void;
  className?: string;
  count?: number;
}

const Product: React.FC<IProductProps> = ({
  className,
  count = 1,
  images,
  isAdded,
  isFeatured,
  onClick,
  onDecrement,
  onIncrement,
  price,
  title,
}) => {
  const isInCart = onIncrement && onDecrement;
  const productClasses = cx(className, styles.product, {
    [styles.inProductLanding]: !isInCart,
    [styles.inCart]: isInCart,
    [styles.featured]: isFeatured,
    [styles.isAddable]: !isAdded,
  });

  const imageSrc = isFeatured
    ? getImage(images, imageTypes.DEFAULT_RT)
    : getImage(images);
  const finalPrice = (price * count).toFixed(2);

  return (
    <div className={productClasses}>
      <img className={styles.image} src={imageSrc} alt={title} />
      <div className={styles.details}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.price}>${finalPrice}</span>
        </div>
        {isInCart ? (
          <Quantity
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            count={count}
          />
        ) : (
          onClick && (
            <Button
              className={styles.addButton}
              disabled={isAdded}
              onClick={onClick}
            >
              {isAdded ? 'Added' : 'Add to Bag'}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Product;
