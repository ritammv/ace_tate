import Link from 'next/link';
import {
  BlackBar,
  BlackBarText,
  IconContainer,
  IconImage,
  NavBarContainer,
  NavBarLogo,
  TextTabs,
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
        <Link href="/">
          <NavBarLogo
            src="https://mma.prnewswire.com/media/1200151/Aceandtate_Logo.jpg?p=publish"
            alt="ace-tate-logo"
          />
        </Link>
        <TextContainer>
          <Link href="/glasses">
            <TextTabs>Glasses</TextTabs>
          </Link>
          <Link href="/sunglasses">
            <TextTabs>Sunglasses</TextTabs>
          </Link>
          <TextTabs>Accessories</TextTabs>
          <TextTabs>Help</TextTabs>
        </TextContainer>

        <IconContainer>
          <IconImage src="/search.svg" alt="search-icon" />
          <IconImage src="/heart.svg" alt="heart-icon" />
          <IconImage src="/circle.svg" alt="circle-icon" />
        </IconContainer>
      </NavBarContainer>
    </>
  );
}
