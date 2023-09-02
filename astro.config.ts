import { defineConfig } from "astro/config"

// UnoCSS
import UnoCSS from "unocss/astro"

// https://astro.build/config
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["images.ctfassets.net"],
  },
  integrations: [
    prefetch(),
    UnoCSS({
      injectReset: true,
    }),
  ],
})
