import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Brand palette
        tomato: "#B33A3A",
        "tomato-deep": "#8E2A2A",
        cream: "#F7F1E3",
        "cream-soft": "#FBF7EC",
        basil: "#2E7D32",
        charcoal: "#1C1C1C",
        gold: "#C9A24B",
        "gold-soft": "#E2C68A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "steam-rise": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "30%": { opacity: "0.6" },
          "100%": { transform: "translateY(-120px) scale(1.6)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.15)" },
        },
      },
      animation: {
        "steam-1": "steam-rise 5s ease-out infinite",
        "steam-2": "steam-rise 6s ease-out 1.2s infinite",
        "steam-3": "steam-rise 7s ease-out 2.4s infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        "slow-zoom": "slow-zoom 18s ease-in-out infinite alternate",
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(ellipse at center, transparent 0%, rgba(28,28,28,0.04) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
