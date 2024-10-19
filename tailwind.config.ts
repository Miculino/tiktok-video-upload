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
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-light": "var(--primary-light)",
        secondary: "var(--secondary)",
        "secondary-hover": "var(--secondary-hover)",
      },
      boxShadow: {
        tiktok: "-2.5px 0 0 0 #25F4EE, 2.5px 0 0 0 #FE2C55",
      },
    },
  },
  plugins: [],
};
export default config;
