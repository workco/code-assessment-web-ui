import imageTypes from '@/constants/imageTypes';
import mockData from './products.json';

export const mockProducts = mockData.map((p) => ({
  ...p,
  images: p.images.map((i) => ({
    src: i.src,
    type: i.type as imageTypes,
  })),
}));
