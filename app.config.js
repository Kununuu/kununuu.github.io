import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      exclude: ["solid-icons"], // See https://stackoverflow.com/a/79316833
    },
  },
  server: {
    prerender: {
      crawlLinks: true,
    },
  },
});