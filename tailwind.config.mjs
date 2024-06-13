/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"currentColor" : "#EEEEEE",
				'primary' : '#9b20b0ce',
				'dark': '#232830;',
				'very-light-pink': '#c7c7c7;',
				'text-input-field': '#f7f7f7;',
				'hospital-green': '#acd9b2;',
			}
		},
	},
	plugins: [],
}
