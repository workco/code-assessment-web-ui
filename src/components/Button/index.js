import React from 'react';
import { css, cx } from 'emotion';
import { theme } from '../../theme';

const styles = css({
  display: 'inline-block',
  color: theme.colors.white,
  background: theme.colors.black,
  fontWeight: 'bold',
  padding: '10px 15px',
  borderRadius: 20,
  border: 'none',
  transition: 'all 300ms ease-in-out',
  '&:hover': {
    background: theme.colors.darkGray,
    color: theme.colors.black
  },
  '&:disabled': {
    background: theme.colors.darkGray,
    color: theme.colors.black35
  }
});

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={cx(className, styles, css(theme.typography.price))}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
