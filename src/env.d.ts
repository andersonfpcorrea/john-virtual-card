/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_NAME_SEPARATOR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
