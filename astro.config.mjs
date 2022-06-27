import { defineConfig } from "astro/config";
import Atomico from "@atomico/astro";
import tokens from "@atomico/postcss-tokens";
// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {},
    ssr: {
      external: ["atomico/html"],
    },
    css: {
      postcss: {
        plugins: [tokens()],
      },
    },
  },
  integrations: [Atomico({ cssLiterals: { minify: true, postcss: true } })],
});
