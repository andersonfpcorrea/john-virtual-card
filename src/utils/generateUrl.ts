import { type IFormDataType } from "./createObjFromFormData";

const nameSeparator = import.meta.env.VITE_NAME_SEPARATOR;

export const generateUrlFromFormData = (
  data: IFormDataType["qrcode"]
): string => {
  const { name, linkedin, github } = data;
  const properName = name.split(" ").join(nameSeparator);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return `${baseUrl}/redirect?name=${properName}&linkedin=${linkedin}&github=${github}`;
};
