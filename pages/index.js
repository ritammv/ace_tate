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
          <HomeButton>SHOP GLASSES</HomeButton>
          <HomeButton>SHOP SUNGLASSES</HomeButton>
        </ButtonContainer>
      </HomeContainer>
    </div>
  );
}
