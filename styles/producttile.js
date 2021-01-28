import styled from 'styled-components';

export const ProductTileContainer = styled.div`
  height: 700px;
  width: 470px;
  position: relative;
  display: flex;
  margin-bottom: 1rem;
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
  cursor: pointer;
  height: 100%;
`;

export const ProductTextContainer = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 40px;
`;

export const ProductName = styled.h1`
  font-weight: 300;
  font-size: 30px;
`;

export const ProductColor = styled.h1`
  font-weight: 100;
  font-size: 25px;
  margin-top: 0.2rem;
`;
