import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    screens: {
      'xs': '500px',
      'sm': '600px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
    },
    extend: {
      fontFamily: {
        aboreto: ['var(--font-aboreto)'],
        rale: ['var(--font-rale)'],
       gilda:['var(--font-gilda)'],
        },
    backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic':
    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}
export default config
