import { Modal as AntDModal } from "antd";
import { QRCode } from "../qrcode";

interface IModalProps {
  value: string;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export function Modal({
  value,
  isModalOpen,
  handleOk,
  handleCancel,
}: IModalProps): JSX.Element {
  return (
    <AntDModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <QRCode value={value} />
    </AntDModal>
  );
}
