import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from 'emotion';
import { useTheme } from 'emotion-theming';

import AppContext from '../../contexts/AppContext';
import TopNav from '../../components/TopNav';
import Product from '../../components/Product';
import { mq } from '../../theme';

const styles = {
  wrapper: {
    padding: '35px 30px',
    width: '100%',
    height: '100%',
    [mq[0]]: {
      padding: '40px 45px'
    }
  },
  cartLink: {
    position: 'absolute',
    top: 35,
    right: 30,
    [mq[0]]: {
      top: 40,
      right: 45
    }
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: '0 0 30px'
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0',
    [mq[0]]: {
      margin: '0 -22.5px'
    }
  }
};

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
        Cart - {cartQuantity}
      </Link>

      <h1 className={css([styles.title, theme.typography.heading])}>
        Daily deals
      </h1>

      <TopNav />

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
