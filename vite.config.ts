import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://pp449.github.io/react-payments/dist/",
  plugins: [react()],
});
