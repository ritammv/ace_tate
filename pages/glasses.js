import { useQuery } from 'react-query';
import { fetchProducts } from './api/apiService';

export default function Glasses() {
  const { data, status } = useQuery('products', fetchProducts);

  return (
    <div className="glasses">
      <h1>sunglasses go here</h1>
    </div>
  );
}
