import Link from 'next/link';
import NavBar from '../components/NavBar';
import {
  BannerImage,
  BannerImageContainer,
  ButtonContainer,
  HomeButton,
  HomeContainer,
  HomeText,
} from '../styles/home';

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeContainer>
        <HomeText>
          Eyewear starting from €100, including prescription lenses
        </HomeText>
        <ButtonContainer>
          <Link href="/glasses">
            <HomeButton className="home_button">SHOP GLASSES</HomeButton>
          </Link>
          <Link href="/sunglasses">
            <HomeButton className="home_button">SHOP SUNGLASSES</HomeButton>
          </Link>
        </ButtonContainer>
      </HomeContainer>
      <BannerImageContainer>
        <BannerImage src="https://ctfassets.aceandtate.com/cdn-cgi/image/quality=80,width=2200/utaji99zkvj6/3RYDRmyvVA3Q4RBXK2SOGl/a370fa3c73eef0ea2192eae45ffdc1a3/Desktop_Banner.jpg" />
      </BannerImageContainer>
    </div>
  );
}
