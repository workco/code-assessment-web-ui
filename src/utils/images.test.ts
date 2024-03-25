import { IImage } from '@/hooks/useAppContext';
import imageTypes from '../constants/imageTypes';

import { getImage } from './images';

const testImages: IImage[] = [
  {
    type: imageTypes.DEFAULT_RT,
    src: 'https://via.placeholder.com/300x300?text=default-rt',
  },
  {
    type: imageTypes.DEFAULT_SQ,
    src: 'https://via.placeholder.com/300x300?text=default-sq',
  },
  {
    type: 'local' as imageTypes,
    src: '/assets/local.png',
  },
];

describe('getImage', () => {
  test('default', () => {
    expect(getImage(testImages)).toBe(
      'https://via.placeholder.com/300x300?text=default-sq',
    );
  });

  test('default rectangular', () => {
    expect(getImage(testImages, imageTypes.DEFAULT_RT)).toBe(
      'https://via.placeholder.com/300x300?text=default-rt',
    );
  });

  test('no match', () => {
    expect(getImage(testImages, 'banana' as imageTypes)).toBeUndefined();
  });

  test('local asset', () => {
    expect(getImage(testImages, 'local' as imageTypes)).toBe(
      `${process.env.PUBLIC_URL}/assets/local.png`,
    );
  });
});
