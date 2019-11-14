import { renderHook } from '@testing-library/react-hooks';

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
});
