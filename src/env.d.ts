/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_DIRECTUS_ADDRESS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}