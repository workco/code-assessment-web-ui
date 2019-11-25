import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from 'emotion';
import { useTheme } from 'emotion-theming';

import AppContext from '../../contexts/AppContext';
import Product from '../../components/Product';
import bag from '../../assets/bag.svg';
import { mq, getColumns, theme } from '../../theme';

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
    display: 'flex',
    alignItems: 'center',
    [mq[0]]: {
      top: 40,
      right: getColumns(1, 'medium')
    }
  },
  iconWrapper: {
    width: 40,
    height: 40,
    padding: 5,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    transition: 'background-color 300ms ease-in-out',
    '&:hover': {
      backgroundColor: theme.colors.darkGray
    }
  },
  cartQuantity: {
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    fontSize: 11,
    fontWeight: 700,
    lineHeight: 0,
    marginLeft: -5
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
