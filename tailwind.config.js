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
          "neutral": "#230a00",        
          "base-100": "#FFFFFF",      
          "info": "#ffbe63",       
          "success": "#36D399",     
          "warning": "#FBBD23",    
          "error": "#ff1c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}