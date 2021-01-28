import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarLogo = styled.img`
  height: 4rem;
  width: 220px;
  cursor: pointer;
`;

export const BlackBar = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
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
  width: 7%;
  display: flex;
  flex-direction: row;
  float: right;
  justify-content: space-between;
  margin-right: 1rem;
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

export const TextTabs = styled.h1`
  cursor: pointer;
  font-size: 25px;
  font-weight: 200;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid black;
  }
`;
