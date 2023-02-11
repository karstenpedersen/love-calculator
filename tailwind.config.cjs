/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				blink: 'blink 1s ease-in-out infinite'
			}
		}
	},
	plugins: []
};
