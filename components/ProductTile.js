/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-return-assign */
import Link from 'next/link';
import {
  ProductTileContainer,
  ProductImageContainer,
  ProductImage,
  ProductTextContainer,
  ProductName,
  ProductColor,
} from '../styles/producttile';

export default function ProductTile({ item }) {
  return (
    <>
      {item.current_variant.images.front && (
        <ProductTileContainer>
          <ProductImageContainer>
            <Link href={`/glasses/${item.current_variant.sku}`}>
              <ProductImage
                // onMouseOver={(e) =>
                //   (e.currentTarget.src = item.current_variant.images.female.url)
                // }
                // onMouseOut={(e) =>
                //   (e.currentTarget.src = item.current_variant.images.front.url)
                // }
                src={item.current_variant.images.front.url}
              />
            </Link>
          </ProductImageContainer>
          <ProductTextContainer>
            <ProductName>{item.current_variant.name}</ProductName>
            <ProductColor>
              {item.current_variant.display_attributes.color}
            </ProductColor>
          </ProductTextContainer>
        </ProductTileContainer>
      )}
    </>
  );
}
