import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import mockProducts from './mocks/products';

import ProductLanding from './pages/ProductLanding';
import ProductDetail from './pages/ProductDetail';

import ProductContext from './contexts/ProductContext';

import './App.scss';

function App() {
  const [products, setProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
    }, 1000);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
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
    </ProductContext.Provider>
  );
}

export default App;
