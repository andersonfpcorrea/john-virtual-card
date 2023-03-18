import { useCallback, useState } from "react";
import { createObjFromFormEntries, generateUrlFromFormData } from "../utils";

interface IUseQrCodeReturn {
  value?: string;
  name?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isModalOpen: boolean;
  handleModalOk: () => void;
  handleModalCancel: () => void;
}

export const useQrCode = (): IUseQrCodeReturn => {
  const [value, setValue] = useState<IUseQrCodeReturn["value"]>(undefined);
  const [name, setName] = useState<IUseQrCodeReturn["name"]>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOk = useCallback((): void => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleModalCancel = useCallback((): void => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const showModal = useCallback((): void => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const formData = createObjFromFormEntries<"qrcode">(e.currentTarget);
      const url = generateUrlFromFormData(formData);
      console.log("URL:", url);
      setName(formData.name);
      setValue(url);
      showModal();
    },
    [setValue, showModal, setName]
  );

  return {
    value,
    name,
    handleSubmit,
    isModalOpen,
    handleModalOk,
    handleModalCancel,
  };
};
