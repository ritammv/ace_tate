import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeText = styled.h1`
  font-size: 100px;
  font-weight: 300;

  width: 70%;
  text-align: center;
`;

export const HomeButton = styled.button`
  height: 70px;
  padding: 1rem 3rem;
  border-radius: 50px;
  background-color: black;
  border: none;
  font-size: 20px;

  color: white;
`;

export const ButtonContainer = styled.div`
  width: 50%;
`;
