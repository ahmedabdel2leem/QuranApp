import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      thuluth_ : ["var(--font-thuluth)"],
      tajweed_ : ["var(--font-nano)"],
      uthmani_ : ["var(--font-amiri)"],
      myfont_ : ["--font-myfont"],
      
    },
    extend: {
      content: {
        'search': 'url(https://cdn.iconscout.com/icon/free/png-512/free-search-1436-527970.png?f=webp&w=25)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:"#3AB6AA",
        secondary:"#A4C7C4",
        dark:"#2D4A7C",
        light: "#EFF9F9"
      },
    },
  },
  
  
  plugins: [],
};
export default config;
