import React from 'react';
import { css, cx } from 'emotion';

const styles = css({
  display: 'inline-block',
  color: 'white',
  background: 'black',
  textTransform: 'uppercase',
  fontWeight: 'normal',
  fontSize: 14,
  padding: '15px 30px',
  borderRadius: 30,
  border: 'none',
  transition: 'all 300ms ease-in-out',

  '&:hover': {
    background: 'white',
    color: 'black'
  }
});

const Button = ({ children, className }) => {
  return <button className={cx(className, styles)}>{children}</button>;
};

export default Button;
