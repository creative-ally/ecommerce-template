/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5D3D28",

          "secondary": "#230A00",

          "accent": "#100720",

          "neutral": "#3D3C42",

          "base-100": "#FFFFFF",

          "info": "#87CEE8",

          "success": "#1C876D",

          "warning": "#C4870E",

          "error": "#E13633",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}