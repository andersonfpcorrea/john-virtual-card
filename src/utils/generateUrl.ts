import { type IFormDataType } from "./createObjFromFormData";

export const generateUrlFromFormData = (
  data: IFormDataType["qrcode"]
): string => {
  const { name, linkedin, github } = data;
  const properName = name.split(" ").join("===");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return `${baseUrl}/redirect?name=${properName}&linkedin=${linkedin}&github=${github}`;
};
