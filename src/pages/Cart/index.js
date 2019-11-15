import React, { useContext } from 'react';
import { css, cx } from 'emotion';
import { useHistory } from 'react-router-dom';
import { theme, mq } from '../../theme';
import empty from '../../assets/empty.png';
import close from '../../assets/close.svg';

import AppContext from '../../contexts/AppContext';
import { useTheme } from 'emotion-theming';
import Product from '../../components/Product';
import Button from '../../components/Button';

const styles = {
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: theme.colors.black35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    position: 'relative',
    backgroundColor: theme.colors.white,
    width: '80%',
    height: 'auto',
    maxHeight: '80%',
    display: 'flex',
    overflowY: 'auto',
    flexDirection: 'column',
    [mq[1]]: {
      flexDirection: 'row'
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 15,
    height: 15,
    [mq[0]]: {
      top: 45,
      right: 45,
      width: 20,
      height: 20
    }
  },
  section: {
    width: '100%',
    padding: 20,
    [mq[0]]: {
      padding: 45
    }
  },
  products: {
    [mq[1]]: {
      width: '65%'
    }
  },
  productList: {
    display: 'flex',
    flexDirection: 'column',
    [mq[0]]: {
      margin: '0 -22.5px',
      flexDirection: 'row'
    }
  },
  product: {
    width: '50%'
  },
  summary: {
    backgroundColor: theme.colors.darkGray,
    [mq[1]]: {
      width: '35%'
    }
  },
  heading: {
    marginBottom: 35
  },
  headingSummary: {
    maxWidth: 200
  },
  summaryRow: {
    width: '100%',
    marginBottom: 20,
    '&:last-child': {
      borderTop: '1px solid #d5d5d5',
      paddingTop: 20
    }
  },
  summaryItem: {
    display: 'inline-block',
    width: '50%',
    '&:nth-child(even)': {
      textAlign: 'right'
    }
  },
  summaryItemBold: {
    fontWeight: 'bold'
  },
  checkoutBtn: {
    width: '100%'
  },
  text: {
    width: '100%',
    margin: 0
  },
  empty: {
    height: '60%',
    minHeight: 400,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  emptyImage: {
    marginBottom: 35,
    maxWidth: '100%'
  }
};

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
                  const { id, title, count, price } = cartItem;
                  return (
                    <Product
                      className={css(styles.product)}
                      key={id}
                      title={title}
                      price={price}
                      count={count}
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
                    $248.00
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
                    $49.90
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
                    $297.00
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
