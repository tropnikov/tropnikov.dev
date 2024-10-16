import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tropnikov.dev",
  integrations: [
    sitemap(),
    tailwind(),
    robotsTxt({
      sitemap: [
        "https://tropnikov.dev/sitemap-index.xml",
        "https://tropnikov.dev/sitemap-0.xml",
      ],
    }),
    icon(),
  ],
});
