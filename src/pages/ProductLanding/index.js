import React, { useContext } from 'react';

import ProductContext from '../../contexts/ProductContext';

import Button from '../../components/Button';

function ProductLanding() {
  const { addItem, products } = useContext(ProductContext);

  return (
    <div>
      <h1>ProductLanding</h1>
      <Button>A button</Button>

      <ul>
        {products.map(product => {
          const { id, title, price, inventory } = product;
          return (
            <li key={id}>
              <h2>{title}</h2>
              <span>
                ${price} - {inventory} remaining
              </span>
              <button onClick={() => addItem(product)}>Add to cart</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductLanding;
