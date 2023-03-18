import { Modal as AntDModal, Space, Typography } from "antd";
import { QRCode } from "../qrcode";
import { Canvas } from "../canvas";
import { useQrModal } from "../../hooks";
import { useRef } from "react";

interface IModalProps {
  value: string;
  name: string;
  isModalOpen: boolean;
  handleCancel: () => void;
  testId?: string;
}

export function Modal({
  value,
  name,
  isModalOpen,
  handleCancel,
  testId = "",
}: IModalProps): JSX.Element {
  const svgRef = useRef<SVGElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  useQrModal({ canvasRef, svgRef });
  return (
    <AntDModal
      open={isModalOpen}
      onOk={handleCancel}
      onCancel={handleCancel}
      okText="Ok"
      data-testid={`modal-${testId}`}
    >
      <Space
        direction="vertical"
        size="large"
        align="center"
        style={{ width: "100%" }}
      >
        <Typography.Title level={3} data-testid={`modal-name-${testId}`}>
          {name}
        </Typography.Title>
        <Space direction="vertical" size="middle">
          <Typography.Title
            level={4}
            data-testid={`modal-scanme-${testId}`}
            style={{ textAlign: "center" }}
          >
            Scan me
          </Typography.Title>
          <a ref={anchorRef}>
            <Canvas ref={canvasRef}>
              <QRCode
                value={value}
                ref={svgRef}
                testId={`modal-qrcode-${testId}`}
              />
            </Canvas>
          </a>
        </Space>
      </Space>
    </AntDModal>
  );
}
