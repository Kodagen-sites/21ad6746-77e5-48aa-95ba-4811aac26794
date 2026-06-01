import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F3252",
        accent: "#1F3252",
        bg: "#FAF6EE",
        cream: "#FAF6EE",
        surface: "#E8DFCF",
        contrast: "#0E1C33",
        "bg-contrast": "#0E1C33",
      },
      fontFamily: {
        display: ["var(--font-lora)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-nunito)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
