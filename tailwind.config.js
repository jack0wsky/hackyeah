/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "screen-size": "1400px",
        "1/7": "14.3%",
        24: "24px",
        20: "20px",
        16: "16px",
        12: "12px",
        8: "8px",
        4: "4px",
      },
    },
  },
  plugins: [],
};
