import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppContext from '../../contexts/AppContext';

import Product from '../../components/Product';

import bag from '../../assets/bag.svg';

import styles from './ProductLanding.module.scss';

function ProductLanding() {
  const { addItem, products, cartItems } = useContext(AppContext);
  const location = useLocation();

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className={styles.wrapper}>
      <Link
        to={{ pathname: 'cart', state: { background: location } }}
        className={styles.cartLink}
      >
        <div className={styles.iconWrapper}>
          <img src={bag} alt="shopping bag" />
        </div>
        <div className={styles.cartQuantity}>{cartQuantity}</div>
      </Link>

      <h1 className={styles.title}>Daily deals</h1>

      <ul className={styles.products}>
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
