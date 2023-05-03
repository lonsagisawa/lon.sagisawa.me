import { defineConfig } from "astro/config"

// UnoCSS
import UnoCSS from "unocss/astro"

// https://astro.build/config
import image from "@astrojs/image"
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
export default defineConfig({
  integrations: [
    prefetch(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    UnoCSS({
      injectReset: true,
    }),
  ],
})
