import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target:
          "https://ak-blog-application-o2a0rfzom-abhis-projects-0596cfc8.vercel.app.",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  define: {
    "process.env": {},
  },
});
