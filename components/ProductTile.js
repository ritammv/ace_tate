import Link from 'next/link';
import {
  ProductTileContainer,
  ProductImageContainer,
  ProductImage,
  ProductTextContainer,
} from '../styles/producttile';

export default function ProductTile({ item }) {
  return (
    <>
      {item.current_variant.images.front && (
        <ProductTileContainer>
          <ProductImageContainer>
            <Link href={`/glasses/${item.current_variant.id}`}>
              <ProductImage src={item.current_variant.images.front.url} />
            </Link>
          </ProductImageContainer>
          <ProductTextContainer>
            <h1>{item.current_variant.name}</h1>
          </ProductTextContainer>
        </ProductTileContainer>
      )}
    </>
  );
}
