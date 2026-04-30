import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        "oc-primary": "#2458D9",
        "oc-cyan": "#2BB8F2",
        "oc-violet": "#5963C7",
        "oc-white": "#F8F8FA",
        "oc-surface": "#D9D9DE",
        "oc-muted": "#A7A9B8",
        "oc-dark": "#0A0A0A",
      },
    },
  },
  plugins: [],
} satisfies Config;
