import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { SpinnerContainer } from '../../styles/glasses';
import { fetchBySku } from '../api/apiService';
import NavBar from '../../components/NavBar';
import {
  ProductDetailsContainer,
  ProductImageLeft,
  ProductImageRight,
  ProductImageMainContainer,
  ProductImageSubContainer,
  ProductTextContainer,
  ProductName,
  ProductPrice,
  ProductLenses,
  ProductDescriptionText,
  BasketButton,
} from '../../styles/productdetails';

export default function ProductDetails() {
  const router = useRouter();
  const { pid } = router.query;
  const { data, status } = useQuery(['fetchBySku', pid], () => fetchBySku(pid));

  console.log(data);

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
        <ProductDetailsContainer>
          <ProductImageMainContainer>
            <ProductImageSubContainer>
              <ProductImageLeft
                className="image_spacing"
                src={data.data[0].current_variant.images.female.url}
              />

              <ProductImageLeft
                className="image_spacing"
                src={data.data[0].current_variant.images.male.url}
              />
            </ProductImageSubContainer>
            <ProductImageSubContainer>
              <ProductImageRight
                className="image_spacing"
                src={data.data[0].current_variant.images.front.url}
              />
              <ProductImageRight
                className="image_spacing"
                src={data.data[0].current_variant.images.side.url}
              />

              <ProductImageRight
                className="image_spacing"
                src={data.data[0].current_variant.images.profile.url}
              />
            </ProductImageSubContainer>
          </ProductImageMainContainer>
          <ProductTextContainer>
            <ProductName>{data.data[0].name}</ProductName>
            <ProductPrice>
              {`From ${data.data[0].from_price.display_value}`}
            </ProductPrice>
            <ProductLenses>Including prescription lenses</ProductLenses>
            <ProductDescriptionText>
              {`"${data.data[0].current_variant.display_attributes.description}"`}
            </ProductDescriptionText>
            <BasketButton>ADD TO BASKET</BasketButton>
          </ProductTextContainer>
        </ProductDetailsContainer>
      )}
    </>
  );
}
