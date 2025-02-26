/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    dropShadow: {
      "sm-shadow" : [
        '0px 548px 219px rgba(0,0,0,0.1)',
        '0px 308px 185px rgba(0,0,0,0.4)',
        '0px 137px 137px rgba(0,0,0,0.6)'
      ]
    }
  },
  plugins: [],
}