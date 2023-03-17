import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Details } from "./Details";

describe("Unit tests for Details component", () => {
  test("It checks if all components are rendered accordigly", () => {
    const testId = "1";
    const view = render(<Details testId={testId} />);

    const details = screen.getByTestId(`details-${testId}`);
    const header = screen.getByTestId(`details-header-title-${testId}`);
    const heading = screen.getByTestId(`details-content-heading-${testId}`);
    const text = screen.getByTestId(`details-content-text-${testId}`);
    const githubBtn = screen.getByTestId(`details-button-github-${testId}`);
    const linkedinBtn = screen.getByTestId(`details-button-linkedin-${testId}`);

    expect(details).toBeInTheDocument();
    expect(header).toHaveTextContent("Hello, my name is");
    expect(heading).toHaveTextContent("My history");
    expect(text).toBeInTheDocument();
    expect(githubBtn).toHaveTextContent("Github");
    expect(linkedinBtn).toHaveTextContent("Linkedin");

    view.unmount();
  });
});
