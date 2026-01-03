import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://your-backend-subdomain.onrender.com",  // Your actual backend URL
        changeOrigin: true,  // Helps with CORS headers
        secure: true,  // For HTTPS
        rewrite: (path) => path.replace(/^\/api/, '')  // Optional: Strips /api if backend expects /feedback
      }
    }
  },
  preview: {
    allowedHosts: [".onrender.com"]
  }
});
