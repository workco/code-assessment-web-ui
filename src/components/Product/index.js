import React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from 'emotion-theming';

import { getImage } from '../../utils/images';
import { mq, theme, getColumns } from '../../theme';

const styles = {
  product: {
    margin: `0 0 40px`,
    width: '100%',
    [mq[0]]: {
      width: getColumns(6.5, 'medium'),
      '&:last-child': {
        marginLeft: getColumns(1, 'medium')
      }
    },
    [mq[1]]: {
      width: getColumns(7, 'large'),
      '&:last-child': {
        marginLeft: getColumns(1, 'large')
      }
    }
  },
  productCart: {
    display: 'flex',
    alignContent: 'flex-start',
    [mq[0]]: {
      flexWrap: 'wrap',
      width: getColumns(5.5, 'medium'),
      '&:last-child': {
        marginLeft: 0
      }
    },
    [mq[1]]: {
      width: getColumns(7, 'large'),
      '&:last-child': {
        marginLeft: 0
      }
    }
  },
  image: {
    width: '100%',
    marginBottom: 10
  },
  imageCart: {
    flexShrink: 0,
    width: '50%',
    [mq[0]]: {
      width: '100%'
    }
  },
  details: {
    width: '50%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: getColumns(1, 'small', 30),
    [mq[0]]: {
      marginLeft: 0,
      width: '100%'
    }
  },
  textCart: {
    marginBottom: 20,
    [mq[2]]: {
      marginBottom: 0
    }
  },
  cartButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
    flexShrink: 0
  },
  cartButton: {
    backgroundColor: theme.colors.lightGray,
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
    [css(styles.productCart)]: inCart
  });
  const imageClasses = cx(css(styles.image), {
    [css(styles.imageCart)]: inCart
  });
  const textClasses = cx(css(styles.text), {
    [css(styles.textCart)]: inCart
  });

  return (
    <li className={productClasses}>
      <img className={imageClasses} src={getImage(images)} alt={title} />
      <div className={css(styles.details)}>
        <div className={css(textClasses)}>
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
          <button onClick={onClick}>Add to cart</button>
        )}
      </div>
    </li>
  );
};

export default Product;
