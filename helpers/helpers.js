/* eslint-disable import/prefer-default-export */
export const getImageUrl = (url) => {
  const splitUrl = url.split('upload');
  return `https://images.aceandtate.com/image/upload/ar_0.8,c_crop/h_600,c_scale${splitUrl[1]}`;
};
