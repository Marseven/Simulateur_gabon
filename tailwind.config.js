/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs officielles du Gabon
        'gabon': {
          'green': '#009639',
          'green-dark': '#007a2f',
          'green-light': '#00b344',
          'yellow': '#FCD116',
          'yellow-dark': '#e6b800',
          'yellow-light': '#ffdc4d',
          'blue': '#3A75C4',
          'blue-dark': '#2d5a9a',
          'blue-light': '#5a8fd4',
        },
        // Couleurs neutres
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'button': '0 4px 14px 0 rgba(0, 150, 57, 0.39)',
      }
    },
  },
  plugins: [],
}
