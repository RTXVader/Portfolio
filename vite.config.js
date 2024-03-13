// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['slick-carousel/slick/slick.css']
//     }
//   }
// })

// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite config options...
  resolve: {
    alias: {
      'slick-css': 'slick-carousel/slick/slick.css',
      'slick-theme-css': 'slick-carousel/slick/slick-theme.css',
    },
  },
});
