import React, { useContext } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { css } from 'emotion';
import { useTheme } from 'emotion-theming';

import AppContext from '../../contexts/AppContext';

const navLinks = [
  {
    title: 'Featured',
    url: '/'
  },
  {
    title: 'Jeans',
    url: '/jeans'
  },
  {
    title: 'Pants',
    url: '/pants'
  },
  {
    title: 'Shorts',
    url: '/shorts'
  },
  {
    title: 'Tops',
    url: '/tops'
  },
  {
    title: 'Outerwear',
    url: '/outerwear'
  },
  {
    title: 'Accessories',
    url: '/accessories'
  }
];

const styles = {
  wrapper: {
    padding: '40px 45px',
    width: '100%',
    height: '100%'
  },
  cartLink: {
    position: 'absolute',
    top: 40,
    right: 45
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: '0 0 30px'
  },
  nav: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 40
  },
  navItem: {
    margin: '0 20px'
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -22.5px'
  },
  product: {
    margin: '0 22.5px 45px'
  }
};

function ProductLanding() {
  const { addItem, products, cartItems } = useContext(AppContext);
  const location = useLocation();
  const theme = useTheme();

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className={css(styles.wrapper)}>
      <Link
        to={{ pathname: 'cart', state: { background: location } }}
        className={css(styles.cartLink)}
      >
        Cart - {cartQuantity}
      </Link>

      <h1 className={css([styles.title, theme.typography.heading])}>
        Daily deals
      </h1>

      <nav>
        <ul className={css(styles.nav)}>
          {navLinks.map(link => (
            <NavLink
              to={link.url}
              className={css([styles.navItem, theme.typography.link])}
              activeStyle={theme.typography.link.active}
              key={link.title}
            >
              {link.title}
            </NavLink>
          ))}
        </ul>
      </nav>

      <ul className={css(styles.products)}>
        {products.map(product => {
          const { id, title, price, inventory } = product;
          return (
            <li className={css(styles.product)} key={id}>
              <img src="http://placehold.it/300x300" alt={title} />
              <h2 className={css(theme.typography.link)}>{title}</h2>
              <span className={css(theme.typography.price)}>
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
