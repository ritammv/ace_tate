export const fetchProducts = async () => {
  try {
    const res = await fetch(
      'https://www.aceandtate.com/torii/catalog/products/all/variants'
    );
    return res.json();
  } catch (err) {
    return console.error(err.message);
  }
};

export const fetchBySku = async (sku) => {
  try {
    const res = await fetch(
      `https://www.aceandtate.com/torii/catalog/products?skus=${sku}`
    );
    return res.json();
  } catch (err) {
    return console.error(err.message);
  }
};
