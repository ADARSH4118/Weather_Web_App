 /** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", 
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"], 
        },
        colors: {
          primary: "#2563eb",   
          secondary: "#1e293b",
        },
      },
    },
    plugins: [],
  };
  
tailwind.config.js

  