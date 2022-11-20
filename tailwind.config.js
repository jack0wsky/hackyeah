/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#ff0043",
        "primary-blue": "#2871FF",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        "screen-size": "1400px",
        "1/7": "14.3%",
        44: "44px",
        24: "24px",
        20: "20px",
        18: '18px',
        16: "16px",
        12: "12px",
        8: "8px",
        4: "4px",
      },
    },
  },
  plugins: [],
};
