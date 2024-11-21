// src/App.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Test if the app renders correctly
describe("App Component", () => {
  test("should render the calculator UI", () => {
    render(<App />);

    expect(screen.getByPlaceholderText(/enter numbers/i)).toBeInTheDocument();
    expect(screen.getByText(/calculate/i)).toBeInTheDocument();
  });

  test("should calculate the correct result for valid input", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/enter numbers/i);
    const buttonElement = screen.getByText(/calculate/i);

    fireEvent.change(inputElement, { target: { value: "1,2,3" } });
    fireEvent.click(buttonElement);

    expect(screen.getByText(/Result:/i)).toBeInTheDocument();
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("should show an error message for negative numbers", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/enter numbers/i);
    const buttonElement = screen.getByText(/calculate/i);

    fireEvent.change(inputElement, { target: { value: "1,-2,3" } });
    fireEvent.click(buttonElement);

    expect(
      screen.getByText(/Negative numbers not allowed: -2/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/Result:/i)).not.toBeInTheDocument();
  });

  test("should handle an empty input string", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/enter numbers/i);
    const buttonElement = screen.getByText(/calculate/i);

    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(buttonElement);

    expect(screen.getByText(/Result:/i)).toBeInTheDocument();
    expect(screen.getByText("Result: 0")).toBeInTheDocument();
  });
});
