export const getImageUrl = src =>
  /^(https?)?:\/\//.test(src) ? src : `${process.env.PUBLIC_URL}${src}`;

export const getImage = (images, type = 'default') => {
  const image = images.find(i => i.type === type);
  return image && getImageUrl(image.src);
};
