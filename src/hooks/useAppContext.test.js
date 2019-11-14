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

    expect(result.current).toEqual({
      addItem: expect.any(Function),
      incrementItem: expect.any(Function),
      decrementItem: expect.any(Function),
      products: mockProducts,
      cartItems: []
    });
  });

  describe('addItem', () => {
    let result;

    beforeEach(async () => {
      const hook = renderHook(() => useAppContext());
      result = hook.result;
      await hook.waitForNextUpdate();
    });

    test('on add item to cart', () => {
      const [productToAdd, ...otherProducts] = mockProducts;

      act(() => {
        result.current.addItem(productToAdd);
      });

      expect(result.current).toEqual({
        addItem: expect.any(Function),
        incrementItem: expect.any(Function),
        decrementItem: expect.any(Function),
        products: [
          {
            ...productToAdd,
            inventory: productToAdd.inventory - 1
          },
          ...otherProducts
        ],
        cartItems: [
          {
            count: 1,
            id: productToAdd.id,
            title: productToAdd.title
          }
        ]
      });
    });

    test('on add second item to cart', () => {
      const [
        firstProductToAdd,
        secondProductToAdd,
        ...otherProducts
      ] = mockProducts;

      act(() => {
        result.current.addItem(firstProductToAdd);
      });

      act(() => {
        result.current.addItem(secondProductToAdd);
      });

      expect(result.current).toEqual({
        addItem: expect.any(Function),
        incrementItem: expect.any(Function),
        decrementItem: expect.any(Function),
        products: [
          {
            ...firstProductToAdd,
            inventory: firstProductToAdd.inventory - 1
          },
          {
            ...secondProductToAdd,
            inventory: secondProductToAdd.inventory - 1
          },
          ...otherProducts
        ],
        cartItems: [
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
        ]
      });
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

    test('on increment product', () => {
      const [cartItemToIncrement] = result.current.cartItems;
      const productToIncrement = result.current.products.find(
        p => p.id === cartItemToIncrement.id
      );

      act(() => {
        result.current.incrementItem(cartItemToIncrement);
      });

      expect(result.current.products).toEqual(
        expect.arrayContaining([
          {
            ...productToIncrement,
            id: cartItemToIncrement.id,
            inventory: productToIncrement.inventory - 1
          }
        ])
      );

      expect(result.current.cartItems).toEqual(
        expect.arrayContaining([
          {
            ...cartItemToIncrement,
            count: cartItemToIncrement.count + 1
          }
        ])
      );
    });
  });
});
