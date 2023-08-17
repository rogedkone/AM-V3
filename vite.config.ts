import * as path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';
import postcssNesting from 'postcss-nesting';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@app': path.resolve(__dirname, './src/app'),
				'@entities': path.resolve(__dirname, './src/entities'),
				'@features': path.resolve(__dirname, './src/features'),
				'@pages': path.resolve(__dirname, './src/pages'),
				'@shared': path.resolve(__dirname, './src/shared'),
				'@locales': path.resolve(__dirname, './src/locales'),
				'@widgets': path.resolve(__dirname, './src/widgets')
			}
		},
		plugins:
			env.VITE_SSL === 'true' ? [react(), svgr(), basicSsl()]
				: [react(), svgr()],
		css: {
			postcss: {
				plugins: [postcssNesting]
			}
		}
	};
});
