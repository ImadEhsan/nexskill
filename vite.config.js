// import { defineConfig } from 'vite'

// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react()],
// })
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],

  base: "./",  // 🔹 Ensures correct asset paths for Vercel
  build: {
    outDir: "dist", // 🔹 Ensure Vite builds to "dist"
  }
});
