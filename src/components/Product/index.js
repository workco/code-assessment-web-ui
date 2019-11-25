import React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from 'emotion-theming';

import Button from '../Button';
import { getImage } from '../../utils/images';

import styles from './index.scss';

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
  const theme = useTheme();

  const inCart = onIncrement && onDecrement;
  const productClasses = cx(className, css(styles.product), {
    inCart: inCart
  });

  return (
    <li className={productClasses}>
      <img className={css(styles.image)} src={getImage(images)} alt={title} />
      <div className={css(styles.details)}>
        <div className={css(styles.text)}>
          <h2 className={css(theme.typography.link)}>{title}</h2>
          <span className={css(theme.typography.price)}>${price}</span>
        </div>
        {onIncrement && onDecrement ? (
          <div className={css(styles.cartButtons)}>
            <button
              className={css([styles.cartButton.left, styles.cartButton])}
              onClick={onIncrement}
            >
              +
            </button>
            <span>{count}</span>
            <button
              className={css([styles.cartButton.right, styles.cartButton])}
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
