import { useState } from "react";
import { createObjFromFormEntries, generateUrlFromFormData } from "../utils";

interface IUseQrCodeReturn {
  value?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isModalOpen: boolean;
  handleModalOk: () => void;
  handleModalCancel: () => void;
}

export const useQrCode = (): IUseQrCodeReturn => {
  const [value, setValue] = useState<IUseQrCodeReturn["value"]>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOk = (): void => {
    setIsModalOpen(false);
  };
  const handleModalCancel = (): void => {
    setIsModalOpen(false);
  };

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = createObjFromFormEntries<"qrcode">(e.currentTarget);
    const url = generateUrlFromFormData(formData);
    console.log("URL:", url);
    setValue(url);
    showModal();
  };

  return {
    value,
    handleSubmit,
    isModalOpen,
    handleModalOk,
    handleModalCancel,
  };
};
