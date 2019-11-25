import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from 'emotion';
import { useTheme } from 'emotion-theming';

import AppContext from '../../contexts/AppContext';
import Product from '../../components/Product';
import bag from '../../assets/bag.svg';

import styles from './index.pcss';

function ProductLanding() {
  const { addItem, products, cartItems } = useContext(AppContext);
  const location = useLocation();
  const theme = useTheme();

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className={css(styles.wrapper)}>
      <Link
        to={{ pathname: 'cart', state: { background: location } }}
        className={css(styles.cartLink)}
      >
        <div className={css(styles.iconWrapper)}>
          <img src={bag} alt="shopping bag" />
        </div>
        <div className={css(styles.cartQuantity)}>{cartQuantity}</div>
      </Link>

      <h1 className={css([styles.title, theme.typography.heading])}>
        Daily deals
      </h1>

      <ul className={css(styles.products)}>
        {products.map(product => (
          <Product
            {...product}
            onClick={() => addItem(product)}
            key={product.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductLanding;
