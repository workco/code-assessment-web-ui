import React from 'react';
import PropTypes from 'prop-types';
import BrowserDetection from 'react-browser-detection';
import cx from 'classnames';

import Button from '../Button';
import Quantity from '../Quantity';

import { getImage } from '../../utils/images';

import styles from './Product.module.scss';

const Product = ({
  className,
  count = 1,
  images,
  isFeatured,
  onClick,
  onDecrement,
  onIncrement,
  price,
  title
}) => {
  return (
    <BrowserDetection once={false}>
      {{
        default: browser => {
          const isInCart = onIncrement && onDecrement;
          const productClasses = cx(
            className,
            styles.product,
            styles[`product-${browser}`],
            {
              [styles.inProductLanding]: !isInCart,
              [styles.inCart]: isInCart,
              [styles.featured]: isFeatured
            }
          );

          const imageSrc = isFeatured
            ? getImage(images, 'featured')
            : getImage(images);
          // const finalPrice = (price * count).toFixed(2);
          // Only show price for one quantity, regardless of count
          const finalPrice = price.toFixed(2);

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
                  <Button className={styles.addButton} onClick={onClick}>
                    Add to bag
                  </Button>
                )}
              </div>
            </div>
          );
        }
      }}
    </BrowserDetection>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  ).isRequired,
  isFeatured: PropTypes.bool,
  onClick: PropTypes.func,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Product;
