/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        primary: '#00D991',
        dark: "#171923",
        light: "#fff",
        body: "#1D1E28"
      },
      animation: {
        fade: 'fadeIn .3s ease-in-out forwards',
      },

      keyframes: {
        fadeIn: {
            '0%': { opacity: 0 },
          "25%": { opacity: 0.25 },
          "75%": { opacity: 0.75},
            '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
