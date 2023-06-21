const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                gray: colors.slate,
                primary: "#0085FF",
                secondary: "#B440FC",
                accent: "#35e9ad",
                caminoSky: "#B5E3FD",
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
		},
	},
	plugins: [
        require('@tailwindcss/typography'),
    ],
}
