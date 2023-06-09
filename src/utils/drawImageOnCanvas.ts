export const drawQRCodeOnCanvas = (
  clonedSvg: SVGElement,
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
): { canvas: HTMLCanvasElement | undefined } => {
  const csize = 256;
  const outerHtml = clonedSvg.outerHTML;
  const blob = new Blob([outerHtml], {
    type: "image/svg+xml;charset=utf-8",
  });
  const URL = window.URL;
  const blobURL = URL.createObjectURL(blob);
  const img = new Image();
  const canvas = canvasRef.current;
  img.onload = () => {
    if (canvas !== null) {
      canvas.width = csize;
      canvas.height = csize;
      const context = canvas.getContext("2d");
      if (context !== null) {
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, csize, csize);
        context.drawImage(img, 0, 0, csize, csize);
      }
    }
  };
  img.src = blobURL;
  return canvas !== null ? { canvas } : { canvas: undefined };
};
