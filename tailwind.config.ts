import { Cedarville_Cursive } from 'next/font/google';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFD1DC',
        'pastel-green': '#a6cba4',
        'pastel-red': '#ff4137',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        cedarville_cursive: ['var(--font-cedarville_cursive)'],
        gilroy: ['Gilroy'],
        futura: ['Futura'],
      },
    },
  },
  plugins: [],
};
export default config;
