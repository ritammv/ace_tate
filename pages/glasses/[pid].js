import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { SpinnerContainer } from '../../styles/glasses';
import { fetchBySku } from '../api/apiService';
import NavBar from '../../components/NavBar';

export default function ProductDetails() {
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
          <h1>Loading...</h1>
        </SpinnerContainer>
      )}

      {status === 'success' && <ProductDetails data={data} />}
    </>
  );
}
