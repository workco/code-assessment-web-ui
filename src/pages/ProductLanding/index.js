import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Product from '../../components/Product';
import CartButton from '../../components/CartButton';

import logo from '../../assets/logo.svg';

import styles from './ProductLanding.module.scss';

function ProductLanding() {
  const { addItem, products, cartItems } = useContext(AppContext);

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);

  const renderProduct = (product, isFeatured) => (
    <Product
      {...product}
      isAdded={cartItems.some(({ id }) => id === product.id)}
      onClick={() => addItem(product)}
      key={product.id}
      isFeatured={isFeatured}
    />
  );

  return (
    <main className={styles.wrapper}>
      <CartButton
        cartQuantity={cartQuantity}
        className={styles.cartIconWrapper}
      />

      <h1 className={styles.title}>
        <img src={logo} alt="Daily deals" />
      </h1>

      <div className={styles.products}>
        {products[0] && renderProduct(products[0], true)}
        <div className={styles.thumbnails}>
          {[...products].slice(1).map(p => renderProduct(p))}
        </div>
      </div>
    </main>
  );
}

export default ProductLanding;
