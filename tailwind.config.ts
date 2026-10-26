import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.04), 0 4px 16px -4px rgb(0 0 0 / 0.06)",
        "card-hover":
          "0 2px 4px 0 rgb(0 0 0 / 0.05), 0 12px 28px -8px rgb(79 70 229 / 0.18)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.14) 0%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
