import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "din-condensed": ["DIN Condensed", "sans-serif"],
        "helvetica-neue": ["Helvetica Neue", "sans-serif"],
      },
      backgroundImage: {
        "noise-pattern": "url('/NOISE.png')", // Add custom background
      },
    },
  },
  plugins: [],
} satisfies Config;
