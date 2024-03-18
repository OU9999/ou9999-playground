import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-default":
          "linear-gradient(to bottom, rgba(0,0,0,0.8) , rgba(0, 0, 0, 1)), linear-gradient(to right, rgb(0,112,243), rgb(248,28,229))",
      },
      backgroundColor: {
        "dark-bg": "rgb(15, 15, 15)",
      },
      width: {
        "276": "68rem",
      },
      maxWidth: {
        "276": "68rem",
      },
    },
  },
  plugins: [],
};
export default config;
