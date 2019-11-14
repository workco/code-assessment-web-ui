import React, { Fragment, useContext } from 'react';
import { Link, Switch, Route, Redirect, useLocation } from 'react-router-dom';

import AppContext from '../../contexts/AppContext';

import ProductLanding from '../../pages/ProductLanding';
import Cart from '../../pages/Cart';

function ModalSwitch() {
  const { cartItems } = useContext(AppContext);
  const location = useLocation();
  const background = location.state && location.state.background;

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <Fragment>
      {/* Set current page to be background of cart modal */}
      <Link to={{ pathname: 'cart', state: { background: location } }}>
        Cart - {cartQuantity}
      </Link>
      <Switch location={background || location}>
        <Route exact path="/">
          <ProductLanding />
        </Route>
        <Redirect to="/" />
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
