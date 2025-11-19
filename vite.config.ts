import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Get the repository name from your GitHub URL, e.g., 'professional-portfolio'
// If you are deploying to https://<username>.github.io/professional-portfolio/
const REPO_NAME = 'professional-portfolio';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Set the base path only for the production build (mode === 'production')
      // If deployed to a subpath (GitHub Pages), set base to the repository name.
      // If deploying to a root domain (e.g., 'https://my-domain.com/'), this is not needed.
      base: mode === 'production' ? `/${REPO_NAME}/` : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});