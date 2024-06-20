/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        15: "repeat(15, minmax(clamp(3.5rem, 3.6vw, 5rem), 1fr))", // clamp(3.5rem, 3.5vw, 5rem)
        16: "repeat(16, minmax(0, 1fr))",
        30: "repeat(30, minmax(clamp(1.75rem, 1.8vw, 2.5rem), 1fr))",
        60: "repeat(30, minmax(clamp(1.75rem, 0.6vw, 2.5rem), 1fr))",

        // Complex site-specific row configuration
        // layout: "200px minmax(900px, 1fr) 100px",
      },
      gridRowEnd: {
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
        25: "25",
        26: "26",
        27: "27",
        28: "28",
        29: "29",
        30: "30",
      },
    },
  },
  plugins: [],
};
