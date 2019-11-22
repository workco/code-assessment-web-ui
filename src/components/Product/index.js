import React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from 'emotion-theming';

import { getImage } from '../../utils/images';
import { mq, theme, getColumns } from '../../theme';
import Button from '../Button';

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
    },
    '&.inCart': {
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
    }
  },
  image: {
    width: '100%',
    marginBottom: 10,
    '.inCart &': {
      flexShrink: 0,
      width: '50%',
      [mq[0]]: {
        width: '100%'
      }
    }
  },
  details: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '.inCart &': {
      width: '50%',
      marginLeft: getColumns(1, 'small', 30),
      [mq[0]]: {
        marginLeft: 0,
        width: '100%'
      }
    }
  },
  text: {
    '.inCart &': {
      marginBottom: 20,
      [mq[2]]: {
        marginBottom: 0
      }
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
    inCart: inCart
  });

  return (
    <li className={productClasses}>
      <img className={css(styles.image)} src={getImage(images)} alt={title} />
      <div className={css(styles.details)}>
        <div className={css(css(styles.text))}>
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
