import { defineConfig } from "astro/config";
import Atomico from "./plugin/setup.js";
// https://astro.build/config
export default defineConfig({
  integrations: [Atomico()],
});
