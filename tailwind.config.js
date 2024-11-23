/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        textcolor: "rgba(var(--textcolor))",
        Navbackground: "rgba(var(--Navbackground))",
        Navborder: "rgba(var(--Navborder))",
        cardsbackground: "rgba(var(--cardsbackground))",
      },
      fontFamily: {
        Gilroy: ["gilroy", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".transform-style-preserve-3d": {
            "transform-style": "preserve-3d",
          },
          ".transform-rotateX-90deg-translateY-3-5vw": {
            transform: "rotateX(-90deg) translateY(1.5vw)",
          },
          ".transform-origin": {
            "transform-origin": "bottom center",
          },
          ".transform-rotateX90deg": {
            transform: "rotateX(90deg)",
          },
          ".transform-translateZ": {
            transform: "translateZ(210px)",
          },

          ".transform-origin-bottom": {
            "transform-origin": "bottom",
          },
          ".transform-origin-top": {
            "transform-origin": "top",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
