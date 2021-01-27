import { useQuery } from 'react-query';
import NavBar from '../components/NavBar';
import ProductTile from '../components/ProductTile';
import { fetchProducts } from './api/apiService';
import { ProductContainer, SpinnerContainer } from '../styles/glasses';

export default function Glasses() {
  const { data, status } = useQuery('products', fetchProducts);

  return (
    <>
      <NavBar />

      {status === 'error' && (
        <SpinnerContainer>
          <h1>Error fetching data</h1>
        </SpinnerContainer>
      )}

      {status === 'loading' && (
        <SpinnerContainer>
          <h1>Loading...</h1>
        </SpinnerContainer>
      )}
      {status === 'success' && (
        <ProductContainer>
          {data.data.map((item) =>
            item.product_type === 'frame' &&
            item.current_variant.filter_options.types[0] === 'optical' ? (
              <ProductTile item={item} key={item.current_variant.id} />
            ) : null
          )}
        </ProductContainer>
      )}
    </>
  );
}
