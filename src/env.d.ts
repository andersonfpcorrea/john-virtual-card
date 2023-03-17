/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_DIVIDER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
