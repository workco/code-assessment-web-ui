import React from 'react';
import { css } from 'emotion';
import { useTheme } from 'emotion-theming';

import { mq } from '../../theme';

const styles = {
  product: {
    margin: '0 22.5px 45px',
    width: '100%',
    [mq[0]]: {
      width: 'calc(50% - 45px)'
    },
    [mq[1]]: {
      width: 'calc(25% - 45px)'
    }
  },
  productImage: {
    width: '100%'
  }
};

const Product = ({ title, price, inventory, onClick }) => {
  const theme = useTheme();

  return (
    <li className={css(styles.product)}>
      <img
        className={css(styles.productImage)}
        src="http://placehold.it/300x300"
        alt={title}
      />
      <h2 className={css(theme.typography.link)}>{title}</h2>
      <span className={css(theme.typography.price)}>
        ${price} - {inventory} remaining
      </span>
      <button onClick={onClick}>Add to cart</button>
    </li>
  );
};

export default Product;
