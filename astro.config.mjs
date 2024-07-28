import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

const locales = {th: "th-TH", en: "en-US"}
const defaultLocale = "th"

// https://astro.build/config
export default defineConfig({
  site: "https://artt-astro-test.netlify.app",
  trailingSlash: "always",
  integrations: [
    preact(),
    mdx(),
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ]
});