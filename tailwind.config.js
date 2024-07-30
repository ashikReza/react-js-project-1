/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        TrainOne: ["Train One", "system-ui"],

        // Add more font families as needed
      },
    },
  },
  plugins: [],
};
