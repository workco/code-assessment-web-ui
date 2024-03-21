import { useContext, useEffect, useState } from 'react';

import AppContext from '../contexts/AppContext';
import { mockProducts } from '../mocks/dataMapper';
import imageTypes from '@/constants/imageTypes';

export interface IImage {
  type: imageTypes;
  src: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  inventory: number;
  images: IImage[];
  description?: string;
}
export interface ICart extends IProduct {
  count: number;
}

export interface IAppContext {
  cartItems: ICart[];
  products: IProduct[];
  addItem: (product: IProduct) => void;
  checkout: () => void;
  decrementItem: (item: ICart) => void;
  incrementItem: (item: ICart) => void;
}

// Only for use in App.ts (to avoid duplicate state instances)
export default function useAppContextValue(): IAppContext {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
    }, 300); // simulate API load time
  }, []);

  const updateProductQuantity = (productId: number, quantityChange: number) => {
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

  const onAddItem = (product: IProduct) => {
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
        inventory: product.inventory,
      });
    }

    setCart(newCart);
    updateProductQuantity(product.id, 1);
  };

  const onUpdateItemQuantity = (cartItem: ICart, quantityChange: number) => {
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

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
