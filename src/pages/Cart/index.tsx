import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Product from '../../components/Product';
import Button from '../../components/Button';

import empty from '../../assets/empty.png';
import close from '../../assets/close.svg';

import styles from './Cart.module.scss';
import AppContext from '@/contexts/AppContext';

class Cart extends React.Component {
  static contextType = AppContext;

  wrapperRef = React.createRef();

  state = {
    isFadedIn: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isFadedIn: true });
    }, 500);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isFadedIn && this.state.isFadedIn) {
      this.wrapperRef.current.style.opacity = 1;
    }
  }

  render() {
    const { cartItems, checkout, incrementItem, decrementItem } = this.context;

    const innerClasses = cx(styles.inner, {
      [styles.empty]: !cartItems.length,
    });

    return (
      <div className={styles.wrapper} ref={this.wrapperRef}>
        <div className={innerClasses}>
          <Link to="/" className={styles.closeBtn}>
            <img src={close} alt="close" />
          </Link>

          {!!cartItems.length ? (
            <>
              <div className={cx(styles.products, styles.section)}>
                <h2 className={styles.heading}>Shopping Bag</h2>
                <ul className={styles.productList}>
                  {cartItems.map((cartItem) => (
                    <Product
                      {...cartItem}
                      className={styles.product}
                      key={cartItem.id}
                      onIncrement={() => incrementItem(cartItem)}
                      onDecrement={() => decrementItem(cartItem)}
                    />
                  ))}
                </ul>
              </div>
              <div className={cx(styles.summary, styles.section)}>
                <h2 className={styles.heading}>Order Summary</h2>
                <div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryItem}>Subtotal</span>
                    <span
                      className={cx(styles.summaryItem, styles.summaryPrice)}
                    >
                      $0
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryItem}>Taxes</span>
                    <span
                      className={cx(styles.summaryItem, styles.summaryPrice)}
                    >
                      $0
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryItem}>Shipping</span>
                    <span
                      className={cx(styles.summaryItem, styles.summaryPrice)}
                    >
                      Free
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryItem}>Total</span>
                    <span
                      className={cx(
                        styles.summaryItem,
                        styles.summaryPrice,
                        styles.summaryItemBold,
                      )}
                    >
                      $0
                    </span>
                  </div>
                </div>
                <Button className={styles.checkoutBtn} onClick={checkout}>
                  Checkout
                </Button>
              </div>
            </>
          ) : (
            <>
              <img className={styles.emptyImage} src={empty} alt="empty" />
              <p className={cx(styles.text, styles.emptyTitle)}>
                Your bag is empty
              </p>
              <p className={cx(styles.text, styles.emptyText)}>
                Please add some products to your cart
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
