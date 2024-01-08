import type { Config } from 'tailwindcss';
const colors = require('./src/theme/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: colors,
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        rubik: ['var(--font-rubik)'],
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(78deg, #1E8327 0%, #85BC8A 99.48%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
