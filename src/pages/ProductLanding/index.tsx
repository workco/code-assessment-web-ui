import CartButton from '../../components/CartButton';
import ProductList from '../../components/ProductList';

import logo from '../../assets/logo.svg';

import styles from './ProductLanding.module.scss';
import { useAppContext } from '../../hooks/useAppContext';

function ProductLanding() {
  const { addItem, products, cartItems } = useAppContext();

  const cartQuantity: number = cartItems.reduce(
    (acc: number, item: { count: number }) => acc + item.count,
    0,
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

      <ProductList
        addItem={addItem}
        cartItems={cartItems}
        products={products}
      />
    </main>
  );
}

export default ProductLanding;
