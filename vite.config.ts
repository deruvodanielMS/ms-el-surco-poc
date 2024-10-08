import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_DROPBOX_APP_KEY': JSON.stringify(
      process.env.VITE_DROPBOX_APP_KEY,
    ),
  },
});
