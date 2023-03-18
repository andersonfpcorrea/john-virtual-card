import { useEffect } from "react";
import { drawQRCodeOnCanvas, isSVG } from "../utils";

interface IUseQrModal {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  svgRef: React.MutableRefObject<SVGElement | null>;
}

export const useQrModal = ({ canvasRef, svgRef }: IUseQrModal): void => {
  useEffect(() => {
    const clonedSvg = svgRef.current?.cloneNode(true);
    if (isSVG(clonedSvg)) {
      drawQRCodeOnCanvas(clonedSvg, canvasRef);
    }
  }, []);
};
