/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Signika Negative"],
      },
      "first-color": "#DC3845",
      "first-color-alt": "#D42B39",
      "title-color": "#282525",
      "text-color": "#5D5656",
      "text-title-color": "#1F2937",
      "text-color-light": "#918889",
      "body-color": "#fffFFF",
      "container-color": "#fffFFF",
      "first-color-dark": "#DB4D59",
      "first-color-alt-dark": "#F3F2F2",
      "title-color-dark": "#C2BDBD",
      "text-color-dark": "#91BB89",
      "text-color-light-dark": "#251819",
      "text-title-color-dark": "#D1D5DB",
      "body-color-dark": "#251819",
      "container-color-dark": "#2F2223",
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
  },
  plugins: [],
  darkMode: ["class"],
};
