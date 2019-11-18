import { getImage } from './images';

const testImages = [
  {
    type: 'featured',
    src: 'https://via.placeholder.com/300x300?text=featured'
  },
  {
    type: 'default',
    src: 'https://via.placeholder.com/300x300?text=default'
  },
  {
    type: 'local',
    src: '/assets/prod-1-local.png'
  }
];

describe('getImage', () => {
  test('default type', () => {
    expect(getImage(testImages)).toBe(
      'https://via.placeholder.com/300x300?text=default'
    );
  });

  test('featured type', () => {
    expect(getImage(testImages, 'featured')).toBe(
      'https://via.placeholder.com/300x300?text=featured'
    );
  });

  test('no match', () => {
    expect(getImage(testImages, 'banana')).toBeUndefined();
  });

  test('local asset', () => {
    expect(getImage(testImages, 'local')).toBe(
      `${process.env.PUBLIC_URL}/assets/prod-1-local.png`
    );
  });
});
