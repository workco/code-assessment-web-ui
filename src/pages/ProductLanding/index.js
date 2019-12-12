import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BrowserDetection from 'react-browser-detection';

import AppContext from '../../contexts/AppContext';
import Product from '../../components/Product';
import CartButton from '../../components/CartButton';

import styles from './ProductLanding.module.scss';

function ProductLanding() {
  const { addItem, products, cartItems } = useContext(AppContext);

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <main className={styles.wrapper}>
      <CartButton
        cartQuantity={cartQuantity}
        className={styles.cartIconWrapper}
      />
      <BrowserDetection>
        {{
          default: browser => (
            <h1 className={styles.title}>
              <Link
                onClick={
                  browser === 'firefox' ? e => e.preventDefault() : undefined
                }
                to="/"
              >
                Daily deals
              </Link>
            </h1>
          )
        }}
      </BrowserDetection>

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
    </main>
  );
}

export default ProductLanding;
