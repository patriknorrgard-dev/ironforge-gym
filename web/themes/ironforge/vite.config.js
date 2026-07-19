import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/ts/main.ts"), // TS-entrypoint
      output: {
        entryFileNames: "main.js",
        assetFileNames: "[name].[ext]", // så CSS blir main.css
      },
    },
    outDir: "dist",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/scss/abstracts/variables" as *;
        `
      }
    }
  },
  server: {
    host: "0.0.0.0",             // Docker / DDEV
    port: 5173,
    strictPort: true,
    cors: true,
    origin: "https://ironforge.ddev.site:5173",
    hmr: {
      host: "ironforge.ddev.site",
      protocol: "wss",
      port: 5173,
    },
    watch: {
      usePolling: true,
    },
  },
});