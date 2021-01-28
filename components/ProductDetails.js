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
            alt="female-image-frame"
          />

          <ProductImageLeft
            className="image_spacing"
            src={getImageUrl(item.current_variant.images.male.url)}
            alt="male-image-frame"
          />
        </ProductImageSubContainer>
        <ProductImageSubContainer>
          <ProductImageRight
            className="image_spacing"
            src={getImageUrl(item.current_variant.images.front.url)}
            alt="front-frame-view"
          />
          <ProductImageRight
            className="image_spacing"
            src={getImageUrl(item.current_variant.images.side.url)}
            alt="side-frame-view"
          />

          <ProductImageRight
            className="image_spacing"
            src={getImageUrl(item.current_variant.images.profile.url)}
            alt="profile-image-view"
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
