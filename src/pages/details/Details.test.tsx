import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Details } from "./Details";

describe("Unit tests for Details component", () => {
  test("It checks if all components are rendered accordigly", () => {
    const testId = "1";
    const view = render(<Details testId={testId} />);
    const details = screen.getByTestId(`details-${testId}`);
    expect(details).toBeInTheDocument();
    view.unmount();
  });
});
