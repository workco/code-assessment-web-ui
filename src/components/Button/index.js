import React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

const Button = ({ children, className, onClick, disabled }) => {
  return (
    <button
      className={cx(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
