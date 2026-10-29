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
        // Version 2 Design System Palette
        clinic: {
          bg: "#FFFFFF",
          secondary: "#F7FAF7",
          surface: "#EAF3E9",
          pastel: "#B8D8B5",
          brand: "#668C63",
          hover: "#466A45",
          dark: "#111411",
          text: "#111311",
          muted: "#666B66",
          border: "#E5EAE4",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 2px 12px rgba(17, 19, 17, 0.04)",
        card: "0 4px 24px -2px rgba(17, 19, 17, 0.06)",
        float: "0 16px 40px -4px rgba(17, 19, 17, 0.10)",
        elevated: "0 24px 60px -8px rgba(17, 19, 17, 0.14)",
      },
      borderRadius: {
        clinic: "1rem",
        "clinic-lg": "1.5rem",
        "clinic-xl": "2rem",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

