/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050816",
          primary: "#0f172a",
          accent: "#22c55e",
          accentSoft: "#bbf7d0",
          muted: "#64748b",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        // fadeUp: "fadeUp 0.8s ease-out both",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeLeft: "fadeLeft 0.8s ease-out forwards",
        fadeRight: "fadeRight 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out both",
        floatSlow: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
