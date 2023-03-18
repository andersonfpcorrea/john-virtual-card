export const isReallyCanvas = (
  canvas: HTMLCanvasElement | null
): canvas is HTMLCanvasElement => {
  return (canvas as HTMLCanvasElement).height !== undefined;
};

export const isReallyCanvasContext = (
  context: CanvasRenderingContext2D | null
): context is CanvasRenderingContext2D => {
  return (context as CanvasRenderingContext2D).fillStyle !== undefined;
};
