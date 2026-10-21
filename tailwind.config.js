/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gym: {
          bg: '#0F172A', // Slate 900
          card: '#1E293B', // Slate 800
          surface: '#334155', // Slate 700
          border: '#334155',
          accent: '#10B981', // Emerald 500
          accentHover: '#059669',
          lime: '#84CC16', // Lime 500
          orange: '#F97316',
        }
      },
    },
  },
  plugins: [],
};
