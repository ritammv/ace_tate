import {
  BlackBar,
  BlackBarText,
  IconContainer,
  IconImage,
  NavBarContainer,
  NavBarLogo,
  TextContainer,
} from '../styles/navbar';

export default function NavBar() {
  return (
    <>
      <BlackBar>
        <BlackBarText>
          Free Shipping on all orders • 30 day return policy
        </BlackBarText>
      </BlackBar>
      <NavBarContainer>
        <NavBarLogo
          src="https://mma.prnewswire.com/media/1200151/Aceandtate_Logo.jpg?p=publish"
          alt=""
        />
        <TextContainer>
          <h3>GLASSES</h3>
          <h3>SUNGLASSES</h3>
          <h3>ACCESSORIES</h3>
          <h3>HELP</h3>
        </TextContainer>

        <IconContainer>
          <IconImage src="/search.svg" />
          <IconImage src="/heart.svg" />
          <IconImage src="/circle.svg" />
        </IconContainer>
      </NavBarContainer>
    </>
  );
}
