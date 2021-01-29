import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it('Shows black bar with text on navbar ', () => {
    const blackBarText = screen.getByText(
      'Free Shipping on all orders • 30 day return policy'
    );
    expect(blackBarText).toBeInTheDocument();
  });
  it('Renders buttons for glasses on navbar ', () => {
    const glasses = screen.getByText('Glasses');
    expect(glasses).toBeInTheDocument();
  });
  it('Renders button for sunglasses on navbar', () => {
    const sunglasses = screen.getByText('Sunglasses');
    expect(sunglasses).toBeInTheDocument();
  });
  it('Renders button for sunglasses on navbar', () => {
    const accessories = screen.getByText('Accessories');
    expect(accessories).toBeInTheDocument();
  });
});
