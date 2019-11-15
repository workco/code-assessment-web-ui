import React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from 'emotion-theming';

import { getImage } from '../../utils/images';
import { mq, theme } from '../../theme';

const styles = {
  product: {
    margin: '0 0 45px',
    width: '100%',
    [mq[0]]: {
      margin: '0 22.5px 45px',
      width: 'calc(50% - 45px)'
    },
    [mq[1]]: {
      width: 'calc(25% - 45px)'
    }
  },
  productCart: {
    [mq[1]]: {
      width: 'calc(50% - 45px)'
    }
  },
  image: {
    width: '100%',
    marginBottom: 10
  },
  details: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  cartButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
    flexShrink: 0
  },
  cartButton: {
    backgroundColor: '#f3f3f3',
    width: 38,
    height: 40,
    fontSize: 20,
    lineHeight: 0,
    left: {
      borderRadius: '20px 0 0 20px'
    },
    right: {
      borderRadius: '0 20px 20px 0'
    }
  }
};

const Product = ({
  className,
  count,
  // inventory,
  onClick,
  onDecrement,
  onIncrement,
  price,
  title
}) => {
  const theme = useTheme();

  return (
    <li
      className={cx(className, css(styles.product), {
        [css(styles.productCart)]: onIncrement && onDecrement
      })}
    >
      <img
        className={css(styles.image)}
        src={getImage(images)}
        alt={title}
      />
      <div className={css(styles.details)}>
        <div>
          <h2 className={css(theme.typography.link)}>{title}</h2>
          <span className={css(theme.typography.price)}>
            ${price} {/* - {inventory} remaining */}
          </span>
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
          <button onClick={onClick}>Add to cart</button>
        )}
      </div>
    </li>
  );
};

export default Product;
