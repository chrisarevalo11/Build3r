import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,css,mdx}'],
	theme: {
		extend: {
			colors: {
				green400: '#1EB854',
				green500: '#3f882b',
				green600: '#2b5222'
			},
			animation: {
				'spin-slow': 'spin 20s linear infinite'
			}
		}
	}
}
export default config
