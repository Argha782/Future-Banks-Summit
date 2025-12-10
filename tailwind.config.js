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
    },
  },
  plugins: [],
};
