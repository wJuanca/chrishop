import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],  // Define Inter como fuente principal sans-serif
				playfair: ['"Playfair Display Variable"', 'serif'],
				greatvibes: ['"Great Vibes"', 'cursive'],
			},
			colors:{
				'pink': '#f2a7be',
				'pink2': '#ec80a4',
				'pink3': '#f9d2de',
				'gris-custom': '#333333'
			}
		},
	},
	plugins: [],
}
