import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductLanding from './pages/ProductLanding';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';

import AppStore from './contexts/app/store';

import './App.scss';

function App() {
  return (
    <AppStore>
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
    </AppStore>
  );
}

export default App;
