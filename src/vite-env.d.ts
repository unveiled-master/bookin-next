/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_DEMO_MODE: string
  readonly VITE_DEMO_EMAIL: string
  readonly VITE_DEMO_PASSWORD: string
  readonly VITE_DEMO_USER_NAME: string
}
interface ImportMeta { readonly env: ImportMetaEnv }
