import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B57B6',
        secondary: '#FFFFFF',
        destructive: '#FF4D4D',

        background: {
          DEFAULT: '#1E1E42',
        },
        foreground: '#DEF2FF',
      },
    },
  },
  plugins: [],
} satisfies Config
