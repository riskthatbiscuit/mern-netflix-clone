import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
	build: {
		chunkSizeWarningLimit: 1000.
	},
	rollupOptions: {
      plugins: [
        visualizer({
          filename: 'bundle-analysis.html',
          open: true,
        }),
      ],
    }
});
