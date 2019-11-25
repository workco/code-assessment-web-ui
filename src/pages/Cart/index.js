import React, { useContext } from 'react';
import { css, cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import { useHistory } from 'react-router-dom';
import empty from '../../assets/empty.png';
import close from '../../assets/close.svg';

import Product from '../../components/Product';
import Button from '../../components/Button';

import AppContext from '../../contexts/AppContext';

import styles from './index.pcss';

function Cart() {
  const { cartItems, incrementItem, decrementItem } = useContext(AppContext);
  const history = useHistory();
  const theme = useTheme();

  return (
    <div className={css(styles.wrapper)}>
      <div
        className={cx(css(styles.inner), {
          [css(styles.empty)]: !cartItems.length
        })}
      >
        <button
          className={css(styles.closeBtn)}
          onClick={() => history.goBack()}
        >
          <img src={close} alt="close" />
        </button>

        {!!cartItems.length ? (
          <>
            <div className={css([styles.products, styles.section])}>
              <h2 className={css([styles.heading, theme.typography.heading2])}>
                Shopping Bag
              </h2>
              <ul className={css(styles.productList)}>
                {cartItems.map(cartItem => {
                  const { id, title, count, price, images } = cartItem;
                  return (
                    <Product
                      className={css(styles.product)}
                      key={id}
                      title={title}
                      price={price}
                      count={count}
                      images={images}
                      onIncrement={() => incrementItem(cartItem)}
                      onDecrement={() => decrementItem(cartItem)}
                    />
                  );
                })}
              </ul>
            </div>
            <div className={css([styles.summary, styles.section])}>
              <h2
                className={css([
                  styles.headingSummary,
                  styles.heading,
                  theme.typography.heading2
                ])}
              >
                Order Summary
              </h2>
              <div>
                <div className={css(styles.summaryRow)}>
                  <span
                    className={css([styles.summaryItem, theme.typography.body])}
                  >
                    Subtotal
                  </span>
                  <span
                    className={css([
                      styles.summaryItem,
                      theme.typography.price
                    ])}
                  >
                    $0
                  </span>
                </div>
                <div className={css(styles.summaryRow)}>
                  <span
                    className={css([styles.summaryItem, theme.typography.body])}
                  >
                    Taxes
                  </span>
                  <span
                    className={css([
                      styles.summaryItem,
                      theme.typography.price
                    ])}
                  >
                    $0
                  </span>
                </div>
                <div className={css(styles.summaryRow)}>
                  <span
                    className={css([styles.summaryItem, theme.typography.body])}
                  >
                    Shipping
                  </span>
                  <span
                    className={css([
                      styles.summaryItem,
                      theme.typography.price
                    ])}
                  >
                    FREE
                  </span>
                </div>
                <div className={css(styles.summaryRow)}>
                  <span
                    className={css([styles.summaryItem, theme.typography.body])}
                  >
                    Total
                  </span>
                  <span
                    className={css([
                      styles.summaryItemBold,
                      styles.summaryItem,
                      theme.typography.price
                    ])}
                  >
                    $0
                  </span>
                </div>
              </div>
              <Button className={css(styles.checkoutBtn)}>Checkout</Button>
            </div>
          </>
        ) : (
          <>
            <img className={css(styles.emptyImage)} src={empty} alt="empty" />
            <p className={css([styles.text, theme.typography.heading2])}>
              Your bag is empty
            </p>
            <p className={css([styles.text, theme.typography.body])}>
              Please add some products to your cart
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
