import { useEffect, useState } from "react";
import { downloadQrCode } from "../utils/downloadQrCode";
import { drawQRCodeOnCanvas, isSVG } from "../utils";

interface IUseDownloadModal {
  handleCancel: () => void;
  anchorRef: React.MutableRefObject<HTMLAnchorElement | null>;
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  svgRef: React.MutableRefObject<SVGElement | null>;
}

export const useDownloadModal = ({
  handleCancel,
  anchorRef,
  canvasRef,
  svgRef,
}: IUseDownloadModal): { handleDownload: () => void } => {
  const [jpgHref, setJpgHref] = useState("");

  const handleDownload = (): void => {
    // downloadQrCode(jpgHref, "qrcode.jpg", anchorRef);
    downloadQrCode(jpgHref, "image.png", anchorRef);
    handleCancel();
  };

  useEffect(() => {
    const clonedSvg = svgRef.current?.cloneNode(true);
    if (isSVG(clonedSvg)) {
      const { canvas } = drawQRCodeOnCanvas(clonedSvg, canvasRef);
      if (canvas !== undefined) {
        // setJpgHref(canvas.toDataURL("image/jpeg"));
        setJpgHref(canvas.toDataURL());
      }
    }
  }, []);

  return {
    handleDownload,
  };
};
