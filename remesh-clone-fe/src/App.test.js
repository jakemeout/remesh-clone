import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders navigation and app container", () => {
  render(<App />);
  expect(screen.getByTestId("app-container")).toBeInTheDocument();
  expect(screen.getByTestId("navigation-container")).toBeInTheDocument();
});
