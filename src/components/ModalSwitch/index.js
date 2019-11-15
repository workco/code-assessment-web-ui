import React, { Fragment } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import ProductLanding from '../../pages/ProductLanding';
import Cart from '../../pages/Cart';

function ModalSwitch() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Fragment>
      {/* Set current page to be background of cart modal */}
      <Switch location={background || location}>
        <Route exact path="/">
          <ProductLanding />
        </Route>
      </Switch>
      {background && (
        <Switch location={location}>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      )}
    </Fragment>
  );
}

export default ModalSwitch;
