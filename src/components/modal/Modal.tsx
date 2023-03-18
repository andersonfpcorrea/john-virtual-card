import { Modal as AntDModal, Space, Typography } from "antd";
import { QRCode } from "../qrcode";
import { Canvas } from "../canvas";
import { DownloadOutlined } from "@ant-design/icons";
import { useDownloadModal } from "../../hooks";
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
  const { handleDownload } = useDownloadModal({
    handleCancel,
    anchorRef,
    canvasRef,
    svgRef,
  });
  return (
    <AntDModal
      open={isModalOpen}
      onOk={handleDownload}
      onCancel={handleCancel}
      okText="Download"
      data-testid={`modal-${testId}`}
    >
      <Space
        direction="vertical"
        size="large"
        align="center"
        style={{ width: "100%" }}
      >
        <Space size="middle">
          <Typography>Download</Typography>
          <DownloadOutlined
            onClick={handleDownload}
            style={{ fontSize: "1rem" }}
            data-testid={`modal-download-icon-${testId}`}
          />
        </Space>
        <Typography data-testid={`modal-name-${testId}`}>{name}</Typography>
        <Space direction="vertical" size="middle">
          <Typography data-testid={`modal-scanme-${testId}`}>
            Scan me
          </Typography>
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
