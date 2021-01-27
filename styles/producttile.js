import styled from 'styled-components';

export const ProductTileContainer = styled.div`
  height: 700px;
  width: 470px;
  position: relative;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
`;

export const ProductImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
`;

export const ProductTextContainer = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
`;
