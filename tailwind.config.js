/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#230a00",    
          "secondary": "#5d3d28",        
          "accent": "#8a5b48",       
          "neutral": "#dbb68a",        
          "base-100": "#FFFFFF",      
          "info": "#fff600",       
          "success": "#0de026",     
          "warning": "#ffa616",    
          "error": "#ff1c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}