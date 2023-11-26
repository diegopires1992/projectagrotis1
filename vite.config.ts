import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      components: `${__dirname}/src/components/`,
      styles: `${__dirname}/src/styles/`,
      types: `${__dirname}/src/types/`,
      utils: `${__dirname}/src/utils/`,
    },
  },
  optimizeDeps: {
    disabled: false,
  },
  define: {
    "process.env": process.env,
    global: "window",
  },
});
