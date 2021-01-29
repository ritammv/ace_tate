import { render, screen } from '@testing-library/react';
import App from '../pages/index';

describe('Home', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Shows heading text on homepage ', () => {
    const heading = screen.getByText(
      'Eyewear starting from €100, including prescription lenses'
    );
    expect(heading).toBeInTheDocument();
  });
  it('Renders buttons for glasses on home ', () => {
    const glasses = screen.getByText('SHOP GLASSES');
    expect(glasses).toBeInTheDocument();
  });
  it('Renders button for sunglasses on home', () => {
    const sunglasses = screen.getByText('SHOP SUNGLASSES');
    expect(sunglasses).toBeInTheDocument();
  });
});
