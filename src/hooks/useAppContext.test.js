import { renderHook, act } from '@testing-library/react-hooks';

import useAppContext from './useAppContext';
import mockProducts from '../mocks/products';

describe('useAppContext', () => {
  test('initial state', () => {
    const { result } = renderHook(() => useAppContext());

    expect(result.current).toEqual({
      addItem: expect.any(Function),
      checkout: expect.any(Function),
      incrementItem: expect.any(Function),
      decrementItem: expect.any(Function),
      products: [],
      cartItems: [],
    });
  });

  test('on fetch products', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAppContext());
    await waitForNextUpdate();

    expect(result.current.products).toEqual(mockProducts);
  });

  describe('addItem', () => {
    let result;

    beforeEach(async () => {
      const hook = renderHook(() => useAppContext());
      result = hook.result;
      await hook.waitForNextUpdate();
    });

    test('on add item to cart', () => {
      const [productToAdd] = mockProducts;

      act(() => {
        result.current.addItem(productToAdd);
      });

      expect(result.current.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: productToAdd.id,
            inventory: productToAdd.inventory - 1,
          }),
        ]),
      );

      expect(result.current.cartItems).toEqual([
        {
          ...productToAdd,
          inventory: productToAdd.inventory - 1,
          count: 1,
        },
      ]);
    });

    test('on add second item to cart', () => {
      const [firstProductToAdd, secondProductToAdd] = mockProducts;

      act(() => {
        result.current.addItem(firstProductToAdd);
      });

      act(() => {
        result.current.addItem(secondProductToAdd);
      });

      expect(result.current.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: firstProductToAdd.id,
            inventory: firstProductToAdd.inventory - 1,
          }),
          expect.objectContaining({
            id: secondProductToAdd.id,
            inventory: secondProductToAdd.inventory - 1,
          }),
        ]),
      );

      expect(result.current.cartItems).toEqual([
        {
          ...firstProductToAdd,
          count: 1,
          inventory: firstProductToAdd.inventory - 1,
        },
        {
          ...secondProductToAdd,
          count: 1,
          inventory: secondProductToAdd.inventory - 1,
        },
      ]);
    });

    test('on add item already in cart', () => {
      const [productToAdd] = mockProducts;

      act(() => {
        result.current.addItem(productToAdd);
      });

      act(() => {
        result.current.addItem(productToAdd);
      });

      expect(result.current.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: productToAdd.id,
            inventory: productToAdd.inventory - 2,
          }),
        ]),
      );

      expect(result.current.cartItems).toEqual([
        {
          ...productToAdd,
          inventory: productToAdd.inventory - 2,
          count: 2,
        },
      ]);
    });
  });

  describe('incrementItem', () => {
    let result;

    beforeEach(async () => {
      const hook = renderHook(() => useAppContext());
      result = hook.result;
      await hook.waitForNextUpdate();
      const [firstProductToAdd, secondProductToAdd] = mockProducts;
      act(() => {
        result.current.addItem(firstProductToAdd);
      });

      act(() => {
        result.current.addItem(secondProductToAdd);
      });
    });

    test('on increment item', () => {
      const [cartItemToIncrement] = result.current.cartItems;
      const productToIncrement = result.current.products.find(
        (p) => p.id === cartItemToIncrement.id,
      );

      act(() => {
        result.current.incrementItem(cartItemToIncrement);
      });

      expect(result.current.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToIncrement.id,
            inventory: productToIncrement.inventory - 1,
          }),
        ]),
      );

      expect(result.current.cartItems).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToIncrement.id,
            count: cartItemToIncrement.count + 1,
            inventory: productToIncrement.inventory - 1,
          }),
        ]),
      );
    });

    test('on increment item from 1 to 2', () => {
      const [cartItemToIncrement] = result.current.cartItems;
      const productToIncrement = result.current.products.find(
        (p) => p.id === cartItemToIncrement.id,
      );

      act(() => {
        result.current.incrementItem(cartItemToIncrement);
      });

      act(() => {
        result.current.incrementItem(cartItemToIncrement);
      });

      expect(result.current.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToIncrement.id,
            inventory: productToIncrement.inventory - 2,
          }),
        ]),
      );

      expect(result.current.cartItems).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToIncrement.id,
            count: cartItemToIncrement.count + 2,
            inventory: productToIncrement.inventory - 2,
          }),
        ]),
      );
    });
  });

  describe.skip('decrementItem', () => {
    test('on decrement item from 2 to 1', () => {});

    test('on decrement item from 1 to 0, removing from cart', () => {});
  });

  describe('checkout', () => {
    let result;

    beforeEach(async () => {
      const hook = renderHook(() => useAppContext());
      result = hook.result;
      await hook.waitForNextUpdate();
      const [productToAdd] = mockProducts;
      act(() => {
        result.current.addItem(productToAdd);
      });

      const [cartItemToIncrement] = result.current.cartItems;
      act(() => {
        result.current.incrementItem(cartItemToIncrement);
      });
    });

    test('checkout', () => {
      const productsBeforeCheckout = [...result.current.products];

      act(() => {
        result.current.checkout();
      });

      expect(result.current.products).toEqual(productsBeforeCheckout);
      expect(result.current.cartItems).toEqual([]);
    });
  });
});
