import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarLogo = styled.img`
  height: 4rem;
  width: 220px;
`;

export const BlackBar = styled.div`
  width: 100%;
  height: 2.5rem;
  background-color: black;
  color: white;
`;

export const BlackBarText = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  margin: auto 0;
`;

export const IconContainer = styled.div`
  width: 5%;
  display: flex;
  flex-direction: row;
  float: right;
  justify-content: space-between;
`;

export const IconImage = styled.img`
  height: 30px;
  width: auto;
`;

export const TextContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
