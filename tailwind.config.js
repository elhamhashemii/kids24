/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary' : '#329988',
      'primaryLight' : '#b9e1da',
      'secondary' : '#d9d9d9',
      'danger' : '#fe424d',
      'violet' : '#7562a1',
      'bgColor' : '#f9f9f9',
      'white' : '#fff',
      'dark' : '#000'
    },
    extend: {},
  },
  plugins: [],
}