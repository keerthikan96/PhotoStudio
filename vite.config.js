import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    open: true
  },
  assetsInclude: ["**/*.JPG"], 
});
