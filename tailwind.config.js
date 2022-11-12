/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#230a00",
          secondary: "#5d3d28",
          accent: "#8a5b48",
          neutral: "#e8bea9",
          info: "#ffbe63",
          success: "#00f200",
          warning: "#f40000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}