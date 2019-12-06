import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Product from '../../components/Product';
import CartButton from '../../components/CartButton';

import styles from './ProductLanding.module.scss';

function ProductLanding() {
  const { addItem, products, cartItems } = useContext(AppContext);

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className={styles.wrapper}>
      <CartButton
        cartQuantity={cartQuantity}
        className={styles.cartIconWrapper}
      />

      <h1 className={styles.title}>Daily deals</h1>

      <div className={styles.products}>
        {products[0] && (
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
