import { Modal as AntDModal, Space, Typography } from "antd";
import { QRCode } from "../qrcode";
import { Canvas } from "../canvas";
import { useEffect, useRef, useState } from "react";
import { drawQRCodeOnCanvas } from "../../utils";
import { downloadQrCode } from "../../utils/downloadQrCode";
import { DownloadOutlined } from "@ant-design/icons";

interface IModalProps {
  value: string;
  name: string;
  isModalOpen: boolean;
  handleCancel: () => void;
}

const isSVG = (el: Node | SVGElement | undefined): el is SVGElement =>
  (el as SVGElement).outerHTML !== undefined;

export function Modal({
  value,
  name,
  isModalOpen,
  handleCancel,
}: IModalProps): JSX.Element {
  const [jpgHref, setJpgHref] = useState("");
  const svgRef = useRef<SVGElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);

  const handleDownload = (): void => {
    downloadQrCode(jpgHref, "qrcode.jpg", anchorRef);
    handleCancel();
  };

  useEffect(() => {
    const clonedSvg = svgRef.current?.cloneNode(true);
    if (isSVG(clonedSvg)) {
      const { canvas } = drawQRCodeOnCanvas(clonedSvg, canvasRef);
      if (canvas !== undefined) {
        setJpgHref(canvas.toDataURL("image/jpg"));
      }
    }
  }, []);

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
