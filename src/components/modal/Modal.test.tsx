import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Modal } from "./Modal";

describe("Unit tests for Canvas component", () => {
  window.URL.createObjectURL = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("It checks if all elements are rendered accordingly", () => {
    const testId = "1";
    const view = render(
      <Modal
        testId={testId}
        name="John"
        value="string"
        isModalOpen={true}
        handleCancel={() => {}}
      />
    );
    const modal = screen.getByTestId(`modal-${testId}`);
    const downloadIcon = screen.getByTestId(`modal-download-icon-${testId}`);
    const name = screen.getByTestId(`modal-name-${testId}`);
    const scanme = screen.getByTestId(`modal-scanme-${testId}`);
    const qrcode = screen.getByTestId(`modal-qrcode-${testId}`);

    expect(modal).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
    expect(downloadIcon).toBeInTheDocument();
    expect(name).toHaveTextContent("John");
    expect(scanme).toBeInTheDocument();
    expect(qrcode).toBeInTheDocument();

    view.unmount();
  });
});
