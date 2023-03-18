import { forwardRef } from "react";

type TCanvasProps = React.CanvasHTMLAttributes<HTMLCanvasElement>;

export const Canvas = forwardRef(function Canvas(
  { children, ...props }: TCanvasProps,
  ref?: React.LegacyRef<HTMLCanvasElement>
): JSX.Element {
  return (
    <canvas {...props} ref={ref}>
      {children}
    </canvas>
  );
});
