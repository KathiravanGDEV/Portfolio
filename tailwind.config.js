/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#AA895F",
        "background-color": "rgb(0,0,0)",
        "background-lin-color":
          "linear-gradient(353deg, rgba(0,0,0,1) 0%, rgba(111,110,110,1) 20%, rgba(0,0,0,1) 100%)",
      },
    },
  },
  plugins: [],
};
