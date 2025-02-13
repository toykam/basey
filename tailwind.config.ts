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
        meme: ["Sour Gummy", "Comic Sans MS", "cursive"],
        molala: ["Moo Lah Lah", "Comic Sans MS", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
