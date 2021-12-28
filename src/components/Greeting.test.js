import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe("<Greeting />", () => {
  // or describe('Greeting component')
  test("renders Hey Beautiful as a text", () => {
    // Arange
    render(<Greeting />);

    // Act
    // ...no function

    // Assert
    screen.getByText("Hey Beautiful", { exact: false });
    // exact: false = casing won't matter & will match substrings
    const heyBeautifulElement = screen.getByText("Hey Beautiful");
    expect(heyBeautifulElement).toBeInTheDocument();
  });
});

describe("<p>", () => {
  test("renders good to see you if button is not clicked", () => {
    render (<Greeting/>)
    const outputElement = screen.getByText("Always great to see your face", {exact: false});
    expect(outputElement).toBeInTheDocument();
  });
  test('renders changed if button is clicked', () => {
    // Arrange
    render (<Greeting/>)

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const changeElement = screen.getByText("change text", {exact: false});
    expect(changeElement).toBeInTheDocument();
  });
  test('renders that buton click removes <p>Always great to see your face</p>', () => {
    // Arrange
    render(<Greeting/>)

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert 
    const outputElement = screen.queryByText("great to see your face", {exact: false});
    expect(outputElement).toBeNull();
  })

})
