import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from 'emotion';
import { useTheme } from 'emotion-theming';

import AppContext from '../../contexts/AppContext';
import Product from '../../components/Product';
import { mq, getColumns } from '../../theme';

const styles = {
  wrapper: {
    padding: '35px 30px',
    width: '100%',
    height: '100%',
    [mq[0]]: {
      padding: `40px ${getColumns(1, 'medium')}`
    },
    [mq[1]]: {
      padding: `40px ${getColumns(1, 'large')}`
    }
  },
  cartLink: {
    position: 'absolute',
    top: 35,
    right: 30,
    [mq[0]]: {
      top: 40,
      right: getColumns(1, 'medium')
    }
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: '0 0 35px',
    [mq[0]]: {
      margin: '0 0 45px'
    }
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0',
    justifyContent: 'space-between',
    '&:after': {
      content: '""',
      flex: 'auto'
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
