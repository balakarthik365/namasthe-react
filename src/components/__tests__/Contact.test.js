import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe("Contact component test cases.", () => {
  it("Should render the Contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("Should load the button in the Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load the placeholder Contact component", () => {
    render(<Contact />);
    const inputName = screen.getAllByPlaceholderText("Enter Name");
    //Assertion
    expect(inputName[0]).toBeInTheDocument();
  });

  it("Should load all the text inputs in the Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    //Assertion
    expect(inputBoxes.length).toBeTruthy();
  });
});
