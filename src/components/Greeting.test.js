import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hey Beautiful as a text', () => {
// Arange
render(<Greeting/>);

// Act
  // ...no function

// Assert
screen.getByText('Hey Beautiful', {exact: false});
// exact: false = casing won't matter & will match substrings
const heyBeautifulElement = screen.getByText('Hey Beautiful');
expect(heyBeautifulElement).toBeInTheDocument();
});