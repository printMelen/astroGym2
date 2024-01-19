/** @type {import('tailwindcss').Config} */
// const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'gym': "url('/gym-back.webp')",
				'gymCover': "url('public/gym-back.webp')",
				'entrenador1': "url('/rubio.jpg')",
				'entrenador2': "url('/yoga.jpg')",
				'entrenador3': "url('/pelota.jpg')",
				'entrenador4': "url('/fondoBlanco.jpg')",
				'silver': "url('/silver.jpg')",
			}
		},
		colors:{
			'casiNegro': '#10002B',
			'casiNegrolite': '#240046',
			'casiNegroMedio': '#3C096C',
			'moradoOscuro': '#5A189A',
			'morado': '#7B2CBF',
			'purpura': '#9D4EDD',
			'purpuraClaro': '#C77DFF',
			'claro': '#E0AAFF',
			'white': '#FFF',
		}
	},
	plugins: [
		// addDynamicIconSelectors(),
	],
};

