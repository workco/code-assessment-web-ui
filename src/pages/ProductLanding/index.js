import React, { useContext } from 'react';

import ProductContext from '../../contexts/ProductContext';

import Button from '../../components/Button';

function ProductLanding() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>ProductLanding</h1>
      <Button>A button</Button>

      <ul>
        {products.map(({ id, title, price, inventory }) => (
          <li key={id}>
            <h2>{title}</h2>
            <span>
              ${price} - {inventory} remaining
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductLanding;
