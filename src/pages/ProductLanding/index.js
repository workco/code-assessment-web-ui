import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import CartButton from '../../components/CartButton';
import ProductList from '../../components/ProductList';

import logo from '../../assets/logo.svg';

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

      <h1 className={styles.title}>
        <img src={logo} alt="Daily deals" />
      </h1>

      <ProductList
        addItem={addItem}
        cartItems={cartItems}
        products={products}
      />
    </main>
  );
}

export default ProductLanding;
