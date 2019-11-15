import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import { useTheme } from 'emotion-theming';

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
  nav: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 40
  },
  navItem: {
    margin: '0 20px',
    '&:first-child': {
      marginLeft: 0
    },
    '&:last-child': {
      marginRight: 0
    }
  }
};

const TopNav = () => {
  const theme = useTheme();

  return (
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
  );
};

export default TopNav;
