import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product';

import styles from './ProductList.module.scss';

function ProductList({ addItem, products, cartItems }) {
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
    <div className={styles.products}>
      {products[0] && renderProduct(products[0], true)}
      <div className={styles.thumbnails}>
        {[...products].slice(1).map((p) => renderProduct(p))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  addItem: PropTypes.func,
  cartItems: PropTypes.array,
  products: PropTypes.array,
};

export default ProductList;
