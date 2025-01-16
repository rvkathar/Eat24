import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us coponent", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact componenet", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should Load input name inside contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Name");

  expect(inputName).toBeInTheDocument();
});
