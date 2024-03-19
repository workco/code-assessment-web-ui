import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
