import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isGitHubPages = env.VITE_GITHUB_PAGES === 'true';

  return {
    plugins: [react(), svgr()],
    base: isGitHubPages ? '/lucky-shop/' : '/',
  };
});
