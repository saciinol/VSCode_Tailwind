/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1200px',
			// => @media (min-width: 1200px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  },
	  
		extend: {
			fontFamily: {
				body: ['Open Sans'],
			},
			colors: {
				'bg-1': '#2c2c32',
				'bg-2': '#ffffff',
				'bg-3': '#f5f5f5',
			},
		},
	},
	plugins: [],
}
