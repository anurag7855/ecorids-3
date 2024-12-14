/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#4CAF50',
        'primary-dark': '#1C2260',
        'background': '#F8F9FA',
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
}
