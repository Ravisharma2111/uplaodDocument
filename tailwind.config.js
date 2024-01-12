module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        black: { "900_3f": "#0000003f", "900_14": "#00000014" },
        gray: {
          50: "#fff8f1",
          100: "#f3f4f6",
          200: "#e5e7eb",
          600: "#6b7280",
          900: "#111928",
          "50_01": "#f9fafb",
        },
        blue_gray: {
          100: "#d1d5db",
          300: "#9ca3af",
          700: "#4b5563",
          800: "#374151",
          900: "#292d53",
        },
        deep_orange: { 500: "#ff5a1f" },
        colors: "#ff5a1fff",
        teal: { 600: "#0e9f6e" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs1: "0px 4px  4px 0px #0000003f",
        bs: "0px 1px  2px 0px #00000014",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
