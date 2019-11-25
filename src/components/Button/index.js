import React from 'react';
import { css, cx } from 'emotion';
import { theme } from '../../theme';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={cx(className, css(theme.typography.price))}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
