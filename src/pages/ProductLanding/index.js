import React, { useContext } from 'react';

import AppContext from '../../contexts/app/context';

import Button from '../../components/Button';

function ProductLanding() {
  const { addItem, products } = useContext(AppContext);

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
