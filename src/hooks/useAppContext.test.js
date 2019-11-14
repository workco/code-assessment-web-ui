import { renderHook, act } from '@testing-library/react-hooks';

import useAppContext from './useAppContext';
import mockProducts from '../mocks/products';

describe('useAppContext', () => {
  test('initial state', () => {
    const { result } = renderHook(() => useAppContext());

    expect(result.current).toEqual({
      addItem: expect.any(Function),
      incrementItem: expect.any(Function),
      decrementItem: expect.any(Function),
      products: [],
      cartItems: []
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
            inventory: productToAdd.inventory - 1
          })
        ])
      );

      expect(result.current.cartItems).toEqual([
        {
          count: 1,
          id: productToAdd.id,
          title: productToAdd.title
        }
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
            inventory: firstProductToAdd.inventory - 1
          }),
          expect.objectContaining({
            id: secondProductToAdd.id,
            inventory: secondProductToAdd.inventory - 1
          })
        ])
      );

      expect(result.current.cartItems).toEqual([
        {
          count: 1,
          id: firstProductToAdd.id,
          title: firstProductToAdd.title
        },
        {
          count: 1,
          id: secondProductToAdd.id,
          title: secondProductToAdd.title
        }
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
            inventory: productToAdd.inventory - 2
          })
        ])
      );

      expect(result.current.cartItems).toEqual([
        {
          count: 2,
          id: productToAdd.id,
          title: productToAdd.title
        }
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
        p => p.id === cartItemToIncrement.id
      );

      act(() => {
        result.current.incrementItem(cartItemToIncrement);
      });

      expect(result.current.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToIncrement.id,
            inventory: productToIncrement.inventory - 1
          })
        ])
      );

      expect(result.current.cartItems).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToIncrement.id,
            count: cartItemToIncrement.count + 1
          })
        ])
      );
    });

    test('on increment item from 1 to 2', () => {
      const [cartItemToIncrement] = result.current.cartItems;
      const productToIncrement = result.current.products.find(
        p => p.id === cartItemToIncrement.id
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
            inventory: productToIncrement.inventory - 2
          })
        ])
      );

      expect(result.current.cartItems).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToIncrement.id,
            count: cartItemToIncrement.count + 2
          })
        ])
      );
    });
  });

  describe('decrementItem', () => {
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

    test('on decrement item from 2 to 1', () => {
      const [cartItemToDecrement] = result.current.cartItems;
      const productToIncrement = result.current.products.find(
        p => p.id === cartItemToDecrement.id
      );

      act(() => {
        result.current.decrementItem(cartItemToDecrement);
      });

      expect(result.current.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToDecrement.id,
            inventory: productToIncrement.inventory + 1
          })
        ])
      );

      expect(result.current.cartItems).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToDecrement.id,
            count: cartItemToDecrement.count - 1
          })
        ])
      );
    });

    test('on decrement item from 1 to 0, removing from cart', () => {
      const [cartItemToDecrement] = result.current.cartItems;
      const productToIncrement = result.current.products.find(
        p => p.id === cartItemToDecrement.id
      );
      act(() => {
        result.current.decrementItem(cartItemToDecrement);
      });
      act(() => {
        // We can't use cartItemToDecrement because we need an item with the updated count
        result.current.decrementItem(result.current.cartItems[0]);
      });

      expect(result.current.products).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: cartItemToDecrement.id,
            inventory: productToIncrement.inventory + 2
          })
        ])
      );

      expect(result.current.cartItems).toEqual([]);
    });
  });
});
