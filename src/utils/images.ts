import { IImage } from '@/hooks/useAppContext';
import imageTypes from '../constants/imageTypes';

export const getImageUrl = (src: string): string =>
  /^(https?)?:\/\//.test(src) ? src : `${process.env.PUBLIC_URL}${src}`;

export const getImage = (
  images: IImage[],
  type: imageTypes | undefined = imageTypes.DEFAULT_SQ,
): string | undefined => {
  const image = images.find((i: IImage) => i.type === type);
  return image && getImageUrl(image.src);
};
