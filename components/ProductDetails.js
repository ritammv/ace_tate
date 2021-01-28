import {
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
} from '../styles/productdetails';
import { getImageUrl } from '../helpers/helpers';

export default function ProductDetails({ item }) {
  return (
    <>
      <ProductImageMainContainer>
        <ProductImageSubContainer>
          <ProductImageLeft
            className="image_spacing"
            src={getImageUrl(item.current_variant.images.female.url)}
          />

          <ProductImageLeft
            className="image_spacing"
            src={getImageUrl(item.current_variant.images.male.url)}
          />
        </ProductImageSubContainer>
        <ProductImageSubContainer>
          <ProductImageRight
            className="image_spacing"
            src={getImageUrl(item.current_variant.images.front.url)}
          />
          <ProductImageRight
            className="image_spacing"
            src={getImageUrl(item.current_variant.images.side.url)}
          />

          <ProductImageRight
            className="image_spacing"
            src={getImageUrl(item.current_variant.images.profile.url)}
          />
        </ProductImageSubContainer>
      </ProductImageMainContainer>
      <ProductTextContainer>
        <ProductName>{item.name}</ProductName>
        <ProductPrice>{`From ${item.from_price.display_value}`}</ProductPrice>
        <ProductLenses>Including prescription lenses</ProductLenses>
        <ProductDescriptionText>
          {`"${item.current_variant.display_attributes.description}"`}
        </ProductDescriptionText>
        <BasketButton>ADD TO BASKET</BasketButton>
      </ProductTextContainer>
    </>
  );
}
