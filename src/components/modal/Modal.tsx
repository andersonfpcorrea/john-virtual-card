import { Modal as AntDModal, Space, Typography } from "antd";
import { QRCode } from "../qrcode";
import { Canvas } from "../canvas";
import { DownloadOutlined } from "@ant-design/icons";
import { useDownloadModal } from "../../hooks";

interface IModalProps {
  value: string;
  name: string;
  isModalOpen: boolean;
  handleCancel: () => void;
}

export function Modal({
  value,
  name,
  isModalOpen,
  handleCancel,
}: IModalProps): JSX.Element {
  const { handleDownload, anchorRef, canvasRef, svgRef } =
    useDownloadModal(handleCancel);
  return (
    <AntDModal
      open={isModalOpen}
      onOk={handleDownload}
      onCancel={handleCancel}
      okText="Download"
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
          />
        </Space>
        <Typography>{name}</Typography>
        <Space direction="vertical" size="middle">
          <Typography>Scan me</Typography>
          <a ref={anchorRef}>
            <Canvas ref={canvasRef}>
              <QRCode value={value} ref={svgRef} />
            </Canvas>
          </a>
        </Space>
      </Space>
    </AntDModal>
  );
}
