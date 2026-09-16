import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative, so the build works both at
// https://storage.googleapis.com/<bucket>/index.html and on a custom domain.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
