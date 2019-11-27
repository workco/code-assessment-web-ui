import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import AppContext from '../../contexts/AppContext';
import Product from '../../components/Product';
import CartButton from '../../components/CartButton';

import styles from './ProductLanding.module.scss';

function ProductLanding() {
  const { addItem, products, cartItems } = useContext(AppContext);
  const location = useLocation();

  const hasFeaturedImage =
    products[0] &&
    products[0].images &&
    Object.values(products[0].images).filter(
      image => image.type === 'featured'
    );

  return (
    <div className={styles.wrapper}>
      <CartButton
        className={styles.cartIconWrapper}
        cartItems={cartItems}
        location={location}
      />

      <h1 className={styles.title}>Daily deals</h1>

      <div className={styles.products}>
        {hasFeaturedImage && (
          <Product
            {...products[0]}
            onClick={() => addItem(products[0])}
            key={products[0].id}
            isFeatured
          />
        )}
        <div className={styles.thumbnails}>
          {[...products].slice(1).map(product => (
            <Product
              {...product}
              onClick={() => addItem(product)}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductLanding;
