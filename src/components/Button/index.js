import React from 'react';
import { css } from 'emotion';

const styles = css({
  display: 'inline-block',
  color: 'white',
  background: 'black',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '1rem',
  padding: '15px 30px',
  borderRadius: '30px',
  border: 'none',
  transition: 'all 300ms ease-in-out',

  '&:hover': {
    background: 'white',
    color: 'black'
  }
});

const Button = ({ children }) => {
  return <button className={styles}>{children}</button>;
};

export default Button;
