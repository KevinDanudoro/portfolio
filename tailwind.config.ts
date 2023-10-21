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
        "content-lg": "70%",
        content: "90%",
      },
      colors: {
        white: "#FFFFFF",
        gray: "#EDD8FF",
        "dark-gray": "#132238",
        purple: "#A53DFF",
        "dark-purple": "#8431CC",
      },
      boxShadow: {
        card: "0 0 12px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        "purple-gradient": "radial-gradient(circle,#DA4DF177,transparent 50%);",
        "blue-gradient": "radial-gradient(circle,#C4F5E977,transparent 50%);",
      },
    },
  },
  plugins: [],
};
export default config;
