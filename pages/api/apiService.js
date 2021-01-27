/* eslint-disable import/prefer-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const fetchProducts = async () => {
  try {
    const res = await fetch(
      'https://www.aceandtate.com/torii/catalog/products/all/variants'
    );
    return res.json();
  } catch (err) {
    console.error(err.message);
  }
};
