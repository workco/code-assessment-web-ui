import React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

const Button = ({ children, className, onClick }) => {
  return (
    <button className={cx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
