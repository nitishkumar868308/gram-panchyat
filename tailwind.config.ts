import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Premium rural Indian palette - earthy, dignified, emotional
        terracotta: {
          50: "#FBF3EE",
          100: "#F5E1D3",
          200: "#E8BFA3",
          300: "#D89976",
          400: "#C77452",
          500: "#B85042", // primary
          600: "#9A3D33",
          700: "#7A2E27",
          800: "#5A211C",
          900: "#3D1612",
        },
        saffron: {
          50: "#FFF7EB",
          100: "#FFE9C8",
          200: "#FACB87",
          300: "#F2AC51",
          400: "#E8902B",
          500: "#D97706",
          600: "#B45F03",
          700: "#894902",
          800: "#5F3201",
          900: "#3D1F00",
        },
        forest: {
          50: "#F1F5EF",
          100: "#DCE6D6",
          200: "#B6C9AB",
          300: "#8AA97D",
          400: "#608C56",
          500: "#3F6634",
          600: "#2F4F26",
          700: "#23381D",
          800: "#172613",
          900: "#0C150A",
        },
        gold: {
          50: "#FCF7EC",
          100: "#F6E9C8",
          200: "#ECD18B",
          300: "#DDB55C",
          400: "#D4A24C",
          500: "#B68534",
          600: "#8E6727",
          700: "#674A1B",
          800: "#432F10",
          900: "#241906",
        },
        cream: {
          DEFAULT: "#FAF5EB",
          50: "#FEFCF7",
          100: "#FAF5EB",
          200: "#F1E7D2",
          300: "#E6D5B0",
        },
        earth: {
          50: "#F4EFE8",
          100: "#E2D6C3",
          200: "#BFA989",
          300: "#8E7553",
          400: "#5C4A33",
          500: "#3D301F",
          600: "#2C1810",
          700: "#1C0E08",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        hindi: ["var(--font-tiro-hindi)", "Mangal", "serif"],
        hindiSans: ["var(--font-noto-hindi)", "Mangal", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(60, 30, 15, 0.08)",
        glow: "0 0 60px rgba(217, 119, 6, 0.25)",
        emboss:
          "inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(60,30,15,0.08)",
      },
      backgroundImage: {
        "warli-pattern":
          "radial-gradient(circle at 1px 1px, rgba(122,46,39,0.12) 1px, transparent 0)",
        "paper-grain":
          "radial-gradient(at 20% 30%, rgba(217,119,6,0.06) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(63,102,52,0.05) 0px, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slow-pan": "slowPan 30s ease-in-out infinite alternate",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowPan: {
          "0%": { transform: "scale(1.08) translateX(0)" },
          "100%": { transform: "scale(1.12) translateX(-2%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
