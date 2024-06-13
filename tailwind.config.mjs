/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"currentColor" : "#EEEEEE",
				'primary' : '#9b20b0ce',
				'dark': '#232830;',
				'gris': '#c7c7c7;',
				'grisClaro': '#f7f7f7;',
				'verde': '#acd9b2;',
			}
		},
	},
	plugins: [],
}
