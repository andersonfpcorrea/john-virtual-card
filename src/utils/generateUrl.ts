import { type IFormDataType } from "./createObjFromFormData";

const space = import.meta.env.VITE_DIVIDER;

export const generateUrlFromFormData = (
  data: IFormDataType["qrcode"]
): string => {
  const { name, linkedin, github } = data;
  const properName = name.split(" ").join(space);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return `${baseUrl}/redirect?${properName}${space}${linkedin}${space}${github}`;
};
