import { render, screen } from "@testing-library/react";
import AppContainer from "../AppContainer";

test("renders conversations and messages", () => {
  render(<AppContainer />);
  expect(screen.getByTestId("conversations-container")).toBeInTheDocument();
  expect(screen.getByTestId("messages-container")).toBeInTheDocument();
});
