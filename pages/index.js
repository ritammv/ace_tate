import NavBar from '../components/NavBar';
import {
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
          <HomeButton className="home_button">SHOP GLASSES</HomeButton>
          <HomeButton className="home_button">SHOP SUNGLASSES</HomeButton>
        </ButtonContainer>
      </HomeContainer>
    </div>
  );
}
