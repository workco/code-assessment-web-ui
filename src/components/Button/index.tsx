import React from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  className = '',
  onClick,
  disabled = false,
}) => {
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
