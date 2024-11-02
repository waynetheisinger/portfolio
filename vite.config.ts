import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: UserConfig = {
	plugins: [UnoCSS(), sveltekit()],
  resolve: {
		alias: {
			'@assets': resolve(__dirname, 'static/assets')
		}
	}
};

export default config;
