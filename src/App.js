import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useAppContext, { providerPropTypes } from './hooks/useAppContext';
import AppContext from './contexts/AppContext';

import Splash from './pages/Splash';
import ProductLanding from './pages/ProductLanding';
import Cart from './pages/Cart';

function App() {
  const appContextValue = useAppContext();
  return (
    <AppContext.Provider value={appContextValue}>
      <Router>
        <Switch>
          <Route path="/products">
            <ProductLanding />
          </Route>
          <Route path="/">
            <Splash />
          </Route>
        </Switch>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

AppContext.Provider.propTypes = providerPropTypes;

export default App;
