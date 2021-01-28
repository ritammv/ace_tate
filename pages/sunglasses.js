import { useQuery, useQueryClient } from 'react-query';

import NavBar from '../components/NavBar';
import ProductTile from '../components/ProductTile';
import { fetchProducts } from './api/apiService';
import { ProductContainer, SpinnerContainer } from '../styles/glasses';

export default function Glasses() {
  const queryClient = useQueryClient();
  const { data, status } = useQuery('products', fetchProducts);

  // console.log(queryClient);

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
            item.current_variant.filter_options.types[0] === 'sunny' ? (
              <ProductTile item={item} key={item.current_variant.id} />
            ) : null
          )}
        </ProductContainer>
      )}
    </>
  );
}
