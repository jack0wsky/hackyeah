/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{ts,tsx}", "./modules/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FD6167",
        "dark-blue": "#05286B",
        "primary-blue": "#2871FF",
        "category-yellow": {
          900: "#795E04",
          200: "#FCEBA4",
        },
        "category-green": {
          900: "#004642",
          200: "#A7DAD8",
        },
        "category-purple": {
          900: "#65446D",
          200: "#DFDDEE",
        },
        grey: {
          400: "#95979D",
        },
      },
      borderWidth: {
        1: "1px",
        2: "2px",
      },
      borderRadius: {
        16: "16px",
        12: "12px",
        8: "8px",
        4: "4px",
      },
      boxShadow: {
        tile: "0px 0px 30px 0px #05286B40",
      },
      spacing: {
        "screen-size": "1400px",
        "1/7": "14.3%",
        44: "44px",
        36: "36px",
        32: "32px",
        28: "28px",
        24: "24px",
        20: "20px",
        18: "18px",
        16: "16px",
        12: "12px",
        8: "8px",
        4: "4px",
      },
      zIndex: {
        2: 2,
      },
    },
  },
  plugins: [],
};
