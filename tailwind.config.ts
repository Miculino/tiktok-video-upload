import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "camera-lens":
          "linear-gradient(325.01deg, rgb(156, 160, 197) -9.8%, rgba(156, 160, 197, 0) 63.24%)",
        "disc-gradient":
          "conic-gradient(from 90deg at 50% 50%, rgb(57, 57, 57) -40.11deg, rgb(21, 21, 21) 47.27deg, rgb(57, 57, 57) 143.02deg, rgb(22, 22, 22) 227.49deg, rgb(57, 57, 57) 319.89deg, rgb(21, 21, 21) 407.27deg)",
        "timeline-divider":
          "linear-gradient(to right, rgba(0, 0, 0, 0.12) 1px, transparent 0)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-light": "var(--primary-light)",
        secondary: "var(--secondary)",
        "secondary-hover": "var(--secondary-hover)",
        disabled: "var(--disabled)",
      },
      boxShadow: {
        tiktok: "-2.5px 0 0 0 #25F4EE, 2.5px 0 0 0 #FE2C55",
        line: "-1px 0 0 0 rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
