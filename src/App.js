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

  const addItem = item => {
    const newCartItems = [...cartItems];

    const cartIndex = cartItems.findIndex(i => i.id === item.id);

    if (cartIndex > -1) {
      newCartItems[cartIndex].count += 1;
    } else {
      newCartItems.push({
        count: 1,
        id: item.id,
        title: item.title
      });
    }

    setCartItems(newCartItems);

    const productIndex = products.findIndex(i => i.id === item.id);
    const newProducts = [...products];

    newProducts[productIndex].inventory -= 1;

    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
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
