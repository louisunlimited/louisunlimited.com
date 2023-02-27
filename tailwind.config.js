/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "space-backdrop": "url('../public/space-bg.png')",
      },
      transitionTimingFunction: {
        "planet-expo": "cubic-bezier(0.07, 1.17, 1, 1)",
      },
      colors: {
        palewhite: "#C0C9D1",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#C0C9D1",
            pre: null,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
