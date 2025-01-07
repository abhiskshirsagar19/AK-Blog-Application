import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://abhik-blog-application.vercel.app",
        secure: false,
      },
    },
  },
  plugins: [react()],
  define: {
    "process.env": {},
  },
});
ad;
