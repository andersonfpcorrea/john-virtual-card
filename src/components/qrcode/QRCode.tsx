import { forwardRef } from "react";
import ReactQRCode from "react-qr-code";

type TRefType =
  | ((
      | string
      | React.RefObject<ReactQRCode>
      | ((instance: ReactQRCode | null) => void)
    ) &
      (
        | string
        | ((instance: SVGSVGElement | null) => void)
        | React.RefObject<SVGSVGElement>
      ))
  | null
  | undefined;

interface IQRCodeProps {
  value: string;
  testId?: string;
  ref?: TRefType;
}

export const QRCode = forwardRef(function QRCode(
  { value, testId = "" }: IQRCodeProps,
  ref
) {
  return (
    <ReactQRCode value={value} ref={ref as TRefType} data-testid={testId} />
  );
});
