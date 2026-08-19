/// <reference types="astro/client" />

interface Window {
  dataLayer: unknown[];
}

declare function gtag(...args: unknown[]): void;
