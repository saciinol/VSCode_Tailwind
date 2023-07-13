/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		colors: {
			'bg-1': '#2c2c32',
			'bg-2': '#ffffff',
			'bg-3': '#f5f5f5',
		},
		extend: {
			fontFamily: {
				'body': ['Open Sans'],
			},
		},
	},
	plugins: [],
};
