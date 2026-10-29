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
        // Version 3 Design Tokens — White × Pistachio × Grey × Black
        v3: {
          white: "#FFFFFF",
          offwhite: "#F8F8F4",
          pistachio: "#C7DDB0",
          sage: "#A9C49A",
          deepgreen: "#5C7651",
          lightgrey: "#E8E9E5",
          midgrey: "#858780",
          charcoal: "#252724",
          nearblack: "#111310",
        },
        // Semantic aliases for cross-compatibility
        clinic: {
          bg: "#FFFFFF",
          secondary: "#F8F8F4",
          surface: "#F8F8F4",
          pastel: "#C7DDB0",
          brand: "#5C7651",
          hover: "#495F40",
          sage: "#A9C49A",
          dark: "#111310",
          text: "#252724",
          muted: "#858780",
          border: "#E8E9E5",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "Inter", "-apple-system", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(17, 19, 16, 0.04)",
        card: "0 4px 20px -2px rgba(17, 19, 16, 0.06)",
        float: "0 16px 40px -4px rgba(17, 19, 16, 0.10)",
        editorial: "0 20px 50px -10px rgba(17, 19, 16, 0.12)",
      },
      borderRadius: {
        clinic: "1rem",
        "clinic-lg": "1.5rem",
        "clinic-xl": "2rem",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
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
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
