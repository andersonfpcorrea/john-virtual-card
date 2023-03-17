import ReactQRCode from "react-qr-code";

interface IQRCodeProps {
  value: string;
  testId?: string;
}

export function QRCode({ value, testId = "" }: IQRCodeProps): JSX.Element {
  return <ReactQRCode value={value} />;
}
