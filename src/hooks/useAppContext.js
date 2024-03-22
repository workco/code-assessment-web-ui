import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import mockProducts from '../mocks/products';

// Only for use in App.js (to avoid duplicate state instances)
export default function useAppContext() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
    }, 300); // simulate API load time
  }, []);

  const updateProductQuantity = (productId, quantityChange) => {
    const newProducts = [...products];
    const productIndex = products.findIndex((p) => p.id === productId);
    if (newProducts[productIndex]) {
      newProducts[productIndex] = {
        ...newProducts[productIndex],
        inventory: newProducts[productIndex].inventory - quantityChange,
      };

      setProducts(newProducts);
    }
  };

  const onAddItem = (product) => {
    const newCart = [...cart];
    const cartIndex = cart.findIndex((i) => i.id === product.id);

    if (cartIndex > -1) {
      newCart[cartIndex] = {
        ...newCart[cartIndex],
        count: newCart[cartIndex].count + 1,
      };
    } else {
      newCart.push({
        count: 1,
        id: product.id,
        title: product.title,
        price: product.price,
        images: product.images,
      });
    }

    setCart(newCart);
    updateProductQuantity(product.id, 1);
  };

  const onUpdateItemQuantity = (cartItem, quantityChange) => {
    const newCart = [...cart];
    const cartIndex = cart.findIndex((i) => i.id === cartItem.id);
    const shouldRemoveFromCart = quantityChange === -1 && cartItem.count === 1;

    if (shouldRemoveFromCart) {
      newCart.splice(cartIndex, 1);
    } else {
      newCart[cartIndex] = {
        ...newCart[cartIndex],
        count: newCart[cartIndex].count + quantityChange,
      };
    }

    setCart(newCart);
    updateProductQuantity(cartItem.id, quantityChange);
  };

  const onCheckout = () => {
    setCart([]);
  };

  const cartItems = cart.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return {
      ...cartItem,
      ...product,
    };
  });

  return {
    cartItems,
    products,
    addItem: onAddItem,
    checkout: onCheckout,
    incrementItem: (item) => onUpdateItemQuantity(item, 1),
    decrementItem: (item) => onUpdateItemQuantity(item, -1),
  };
}

const productPropTypes = {
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
  inventory: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export const providerPropTypes = {
  value: PropTypes.shape({
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        ...productPropTypes,
        count: PropTypes.number.isRequired,
      }),
    ),
    products: PropTypes.arrayOf(PropTypes.shape(productPropTypes)).isRequired,
    addItem: PropTypes.func.isRequired,
    checkout: PropTypes.func.isRequired,
    decrementItem: PropTypes.func.isRequired,
    incrementItem: PropTypes.func.isRequired,
  }),
};
