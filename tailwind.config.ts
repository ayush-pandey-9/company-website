import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#C44411",
        secondary: "#9A1D19",
      },
      spacing: {
        "14": "0.875rem",
        "30": "1.875rem",
        "35": "2.1875rem",
        "50": "3.125rem",
        "70": "4.375rem",
      },
      borderRadius: {
        "30": "30px",
      },
      lineHeight: {
        "14": "0.875rem",
        "30": "1.875rem",
        "35": "2.1875rem",
        "50": "3.125rem",
        "70": "4.375rem",
      },
      fontSize: {
        "14": "0.875rem",
        "16": "1rem",
        "28": "1.75rem",
        "30": "1.875rem",
        "35": "2.1875rem",
        "50": "3.125rem",
        "70": "4.375rem",
      },
      minWidth: {
        "288": "18rem",
      },
      gridTemplateColumns: {
        custom: "1.25fr 1fr",
      },
    },
  },
  plugins: [],
};
export default config;
