import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductLanding from './pages/ProductLanding';
import ProductDetail from './pages/ProductDetail';
import './App.scss';

class App extends Component {
  static initialState = {
    products: [],
    cartItems: [],
    addToCart: this.onAddToCart
  };

  onAddToCart = () => {
    console.log('Add to cart');
  };

  render() {
    return (
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
    );
  }
}

export default App;
