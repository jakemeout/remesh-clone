import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Form from "../Form";

test("renders label, input and submit button", () => {
  const label = "Testing form label";
  render(<Form label={label} />);

  expect(screen.getByTestId("form-label")).toBeInTheDocument();
  expect(screen.getByTestId("form-label")).toHaveTextContent(label);

  expect(screen.getByTestId("form-input")).toBeInTheDocument();

  expect(screen.getByTestId("form-submit")).toBeInTheDocument();
  expect(screen.getByTestId("form-submit")).toHaveTextContent("Submit");
});

test("updates input form upon change", () => {
  render(<Form />);
  const input = screen.getByTestId("form-input");
  fireEvent.change(input, {
    target: { value: "testy" },
  });
  expect(screen.getByDisplayValue(/testy/i)).toBeInTheDocument();
});
