import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { SpinnerContainer } from '../../styles/glasses';
import Spinner from '../../components/Spinner';
import { fetchBySku } from '../api/apiService';
import NavBar from '../../components/NavBar';
import ProductDetails from '../../components/ProductDetails';
import { ProductDetailsContainer } from '../../styles/productdetails';

export default function DetailsPage() {
  const router = useRouter();
  const { pid } = router.query;
  const { data, status } = useQuery(['fetchBySku', pid], () => fetchBySku(pid));

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
          <Spinner />
        </SpinnerContainer>
      )}

      {status === 'success' && (
        <ProductDetailsContainer>
          {data.data.map((item) => (
            <ProductDetails item={item} />
          ))}
        </ProductDetailsContainer>
      )}
    </>
  );
}
