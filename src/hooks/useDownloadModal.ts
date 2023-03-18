import { useEffect, useRef, useState } from "react";
import { downloadQrCode } from "../utils/downloadQrCode";
import { drawQRCodeOnCanvas, isSVG } from "../utils";

interface IUseDownloadModalReturn {
  handleDownload: () => void;
  anchorRef: React.MutableRefObject<HTMLAnchorElement | null>;
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  svgRef: React.MutableRefObject<SVGElement | null>;
}

export const useDownloadModal = (
  handleCancel: () => void
): IUseDownloadModalReturn => {
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

  return {
    handleDownload,
    anchorRef,
    canvasRef,
    svgRef,
  };
};
