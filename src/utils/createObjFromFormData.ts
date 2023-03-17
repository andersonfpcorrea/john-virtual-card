export interface IFormDataType {
  qrcode: {
    name: string;
    linkedin: string;
    github: string;
  };
}

export function createObjFromFormEntries<T extends keyof IFormDataType>(
  form: HTMLFormElement
): IFormDataType[T] {
  return Object.fromEntries([...new FormData(form)]) as IFormDataType[T];
}
