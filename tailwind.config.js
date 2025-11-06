/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'fa-facebook-f',
    'fa-instagram',
    'fa-envelope',
    'fab',
    'fas'
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        'cream-bg': '#e8d7c3',
        'dark-text': '#2d2d2d',
        'magenta': '#c41e6e',
        'gold': '#d4a373',
      },
    },
  },
  plugins: [],
}
