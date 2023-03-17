import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Unit tests for Home component", () => {
  test("It checks if all components are rendered accordigly", () => {
    const testId = "1";
    const view = render(<Home testId={testId} />);

    const home = screen.getByTestId(`home-${testId}`);
    const title = screen.getByTestId(`home-title-${testId}`);
    const name = screen.getByTestId(`home-input-name-${testId}`);
    const linkedin = screen.getByTestId(`home-input-linkedin-${testId}`);
    const github = screen.getByTestId(`home-input-github-${testId}`);
    const button = screen.getByTestId(`home-button-${testId}`);

    expect(home).toBeInTheDocument();
    expect(title).toHaveTextContent("QR Code Image Generator");
    expect(name).toHaveAttribute("type", "text");
    expect(linkedin).toHaveAttribute("type", "text");
    expect(github).toHaveAttribute("type", "text");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveTextContent("Generate Image");

    view.unmount();
  });
});
