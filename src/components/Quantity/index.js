import React from 'react';
import cx from 'classnames';

import styles from './Quantity.module.scss';

const Quantity = ({ onIncrement, onDecrement, count }) => {
  return (
    <div className={styles.quantity}>
      <button className={cx(styles.left, styles.button)} onClick={onDecrement}>
        -
      </button>
      <span>{count}</span>
      <button className={cx(styles.right, styles.button)} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default Quantity;
