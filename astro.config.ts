import { defineConfig } from "astro/config"

// UnoCSS
import UnoCSS from "@unocss/astro"
import presetUno from "@unocss/preset-uno"
import presetTypography from "@unocss/preset-typography"
import presetWebFonts from "@unocss/preset-web-fonts"
import presetIcons from "@unocss/preset-icons"

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
      presets: [
        presetUno({
          dark: "media",
        }),
        presetTypography({}),
        presetWebFonts({
          provider: "none",
          fonts: {
            sans: ["Open Sans", "LINE Seed JP", "sans-serif"],
            mono: ["IBM Plex Mono", "monospace"],
            heading: ["Montserrat", "LINE Seed JP", "sans-serif"],
          },
        }),
        presetIcons(),
      ],
    }),
  ],
})
