/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#F5F0F7',
          100: '#EDE4F3',
          200: '#DDD0E8',
          300: '#C9B0D9',
          400: '#B48DC6',
          500: '#9B6DB3',
          600: '#8A5CA0',
          700: '#724A85',
          800: '#5F3D6F',
          900: '#4E335C',
        },
        rose: {
          50: '#FFF5F5',
          100: '#FDE8E8',
          200: '#FBD5D5',
          300: '#F8B4B4',
          400: '#F8808A',
          500: '#F25C68',
        },
        sage: {
          50: '#F2F5F0',
          100: '#E4ECE0',
          200: '#C9D9C1',
          300: '#B2C9AD',
          400: '#96B48F',
          500: '#7A9E72',
          600: '#608258',
          700: '#4D6946',
          800: '#3F5539',
          900: '#34462F',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
