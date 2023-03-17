import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Unit tests for Home component", () => {
  test("It checks if all components are rendered accordigly", () => {
    const testId = "1";
    const view = render(<Home testId={testId} />);
    const home = screen.getByTestId(`home-${testId}`);
    expect(home).toBeInTheDocument();
    view.unmount();
  });
});
