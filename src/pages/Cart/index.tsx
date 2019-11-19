import React from 'react';
import cx from 'classnames';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import Product from '../../components/Product';
import Button from '../../components/Button';

import empty from '../../assets/empty.png';
import close from '../../assets/close.svg';

import styles from './Cart.module.scss';
import { ICart } from '../../hooks/useAppContext';
import AppContext from '../../contexts/AppContext';

interface ICartState {
  isFadedIn: boolean;
}

interface ICartProps {
  navigate: NavigateFunction;
}

const Cart = () => {
  const navigate = useNavigate();

  return <CartComponent navigate={navigate} />;
};

class CartComponent extends React.Component<ICartProps> {
  static contextType = AppContext;

  context!: React.ContextType<typeof AppContext>;
  wrapperRef = React.createRef<HTMLDivElement>();

  state: ICartState = {
    isFadedIn: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isFadedIn: true });
    }, 500);
  }

  componentDidUpdate(_prevProps: ICartProps, prevState: ICartState) {
    if (this.wrapperRef?.current) {
      if (!prevState.isFadedIn && this.state.isFadedIn) {
        if (!prevState.isFadedIn && this.state.isFadedIn) {
          this.wrapperRef.current.style.opacity = '1';
        } else if (prevState.isFadedIn && !this.state.isFadedIn) {
          this.wrapperRef.current.style.opacity = '0';
        }
      }
    }
  }

  close = () => {
    this.setState({ isFadedIn: false }, () => {
      setTimeout(() => {
        this.props.navigate({ pathname: '/' });
      }, 500);
    });
  };

  render() {
    if (!this.context) {
      return null;
    }
    const { cartItems, checkout, incrementItem, decrementItem } = this.context;

    const innerClasses = cx(styles.inner, {
      [styles.empty]: !cartItems.length,
    });

    return (
      <div className={styles.wrapper} ref={this.wrapperRef}>
        <div className={innerClasses}>
          <button onClick={this.close} className={styles.closeBtn}>
            <img src={close} alt="close" />
          </button>

          {!!cartItems.length ? (
            <>
              <div className={cx(styles.products, styles.section)}>
                <h2 className={styles.heading}>Shopping Bag</h2>
                <ul className={styles.productList}>
                  {cartItems.map((cartItem: ICart) => (
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
