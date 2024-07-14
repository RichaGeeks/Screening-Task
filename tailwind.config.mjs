/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
				'3xl': '0 35px 35px rgba(255, 239, 84, 1)'
			}
		},
	},
	plugins: [],
}
