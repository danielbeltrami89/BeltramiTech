import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06070a",
        surface: "#0d1017",
        muted: "#9aa4b2",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(50, 94, 255, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
