import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  width: 95%;
  margin: 5rem auto;
  display: flex;
  flex-direction: row;
`;

export const ProductImageMainContainer = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: row;
`;

export const ProductImageSubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImageLeft = styled.img`
  object-fit: cover;
  height: 800px;
  width: 650px;
`;

export const ProductImageRight = styled.img`
  height: 560px;
  width: 650px;
  object-fit: cover;
`;

export const ProductTextContainer = styled.div`
  width: 35%;
  padding: 0 8rem;
  height: 100vh;
  text-align: center;
`;

export const ProductName = styled.h1`
  font-size: 65px;
  font-weight: 400;
  text-align: left;
`;

export const ProductPrice = styled.h1`
  font-size: 30px;
  margin-top: 2rem;
  font-weight: 300;
  text-align: left;
`;

export const ProductLenses = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin-top: 0.5rem;
  color: #cccc;
  text-align: left;
`;

export const ProductDescriptionText = styled.p`
  font-size: 40px;

  margin-top: 4rem;
  font-weight: 300;
  font-style: italic;
`;

export const BasketButton = styled.button`
  width: 350px;
  padding: 1.6rem 4.5rem;
  color: white;
  font-size: 20px;
  border: none;
  margin-top: 3rem;
  border-radius: 10px;
  background-color: #001d7c;
`;
