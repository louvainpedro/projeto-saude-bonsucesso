import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2C3E50",
        "light-blue": "#3498DB",
        "light-gray": "#ECF0F1",
        "light-green": "#2ECC71",
        "light-red-I": "#ab291b",
        "mid-red-I": "#922013",
        "dark-red-I": "#712013",
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
