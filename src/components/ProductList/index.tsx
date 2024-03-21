import React from 'react';
import Product from '../Product';

import styles from './ProductList.module.scss';
import { IProduct, ICart } from '../../hooks/useAppContext';

interface Props {
  addItem: (product: IProduct) => void;
  cartItems: ICart[];
  products: IProduct[];
}
const ProductList: React.FC<Props> = ({ addItem, products, cartItems }) => {
  const renderProduct = (product: IProduct, isFeatured = false) => (
    <Product
      {...product}
      isAdded={cartItems.some(({ id }) => id === product.id)}
      onClick={() => addItem(product)}
      key={product.id}
      isFeatured={isFeatured}
    />
  );

  return (
    <div className={styles.products}>
      {products[0] && renderProduct(products[0], true)}
      <div className={styles.thumbnails}>
        {[...products].slice(1).map((p) => renderProduct(p))}
      </div>
    </div>
  );
};

export default ProductList;
