import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import mockProducts from './mocks/products';

import ProductLanding from './pages/ProductLanding';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

import './App.scss';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
    }, 300);
  }, []);

  const addItem = product => {
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

    const newProducts = [...products];
    const productIndex = products.findIndex(i => i.id === product.id);
    newProducts[productIndex].inventory -= 1;

    setProducts(newProducts);
  };

  const updateItemQuantity = (cartItem, quantityChange) => {
    const newCartItems = [...cartItems];
    const cartIndex = cartItems.findIndex(i => i.id === cartItem.id);

    if (quantityChange === -1 && cartItem.count === 1) {
      newCartItems.splice(cartIndex, 1);
    } else {
      newCartItems[cartIndex].count += quantityChange;
    }

    setCartItems(newCartItems);

    const newProducts = [...products];
    const productIndex = products.findIndex(i => i.id === cartItem.id);
    newProducts[productIndex].inventory -= quantityChange;

    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addItem,
        incrementItem: item => updateItemQuantity(item, 1),
        decrementItem: item => updateItemQuantity(item, -1)
      }}
    >
      <CartContext.Provider value={{ cartItems }}>
        <Cart />
        <Router>
          <Switch>
            <Route exact path="/">
              <ProductLanding />
            </Route>
            <Route exact path="/product/:id">
              <ProductDetail />
            </Route>
          </Switch>
        </Router>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
