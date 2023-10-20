import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        content: "70%",
      },
      backgroundColor: {
        white: "#FFFFFF",
        gray: "#556070",
        "dark-gray": "#132238",
        purple: "#A53DFF",
        "dark-purple": "#8431CC",
      },
    },
  },
  plugins: [],
};
export default config;
