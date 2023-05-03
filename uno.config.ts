import {
  defineConfig,
  presetUno,
  presetTypography,
  presetIcons,
  presetWebFonts,
} from "unocss"

export default defineConfig({
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
})
