/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cash': "url('/cash.png')",
        'credit': "url('/credit.png')",
        'mastercard': "url('/mastercard.png')",
      },
      fontSize: {
        '2xs': "0.5rem"
      },
      lineHeight: {
        '2xs': '0.75rem',
      },
      maxHeight: {
        '99': '32rem',
      },
    },
  },
  plugins: [],
}