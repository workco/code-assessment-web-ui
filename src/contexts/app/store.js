import React, { useEffect, useState } from 'react';

import mockProducts from '../../mocks/products';

import AppContext from './context';

function AppStore({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // We can update the mock file as needed to match the designs
      setProducts(mockProducts);
    }, 300); // simulate API load time
  }, []);

  const updateProductQuantity = (productId, quantityChange) => {
    const newProducts = [...products];
    const productIndex = products.findIndex(p => p.id === productId);
    newProducts[productIndex].inventory -= quantityChange;

    setProducts(newProducts);
  };

  const onAddItem = product => {
    const newCartItems = [...cartItems];
    const cartIndex = cartItems.findIndex(i => i.id === product.id);

    if (cartIndex > -1) {
      newCartItems[cartIndex].count += 1;
    } else {
      newCartItems.push({
        count: 1,
        id: product.id,
        title: product.title
      });
    }

    setCartItems(newCartItems);
    updateProductQuantity(product.id, 1);
  };

  const onUpdateItemQuantity = (cartItem, quantityChange) => {
    const newCartItems = [...cartItems];
    const cartIndex = cartItems.findIndex(i => i.id === cartItem.id);
    const shouldRemoveFromCart = quantityChange === -1 && cartItem.count === 1;

    if (shouldRemoveFromCart) {
      newCartItems.splice(cartIndex, 1);
    } else {
      newCartItems[cartIndex].count += quantityChange;
    }

    setCartItems(newCartItems);
    updateProductQuantity(cartItem.id, quantityChange);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        products,
        addItem: onAddItem,
        incrementItem: item => onUpdateItemQuantity(item, 1),
        decrementItem: item => onUpdateItemQuantity(item, -1)
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppStore;
