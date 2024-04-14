/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--kb-collapsible-content-height)" },
        },
        slideUp: {
          from: { height: "var(--kb-collapsible-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 200ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 200ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
