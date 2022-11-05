/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#230a00",
          secondary: "#5d3d28",
          accent: "#e8bea9",
          neutral: "#C47D11",
          info: "#92C9DD",
          success: "#23D7B6",
          warning: "#EB8D28",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}