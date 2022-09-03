/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#ffb703",
        primaryBrown: "#2a0d00",
        blackish: "#0f0d11",
        spheronBlue: "#004be9",
        spheronCyan: "#70e4ff",
        baseColor: "#efefd0",
      },
    },
  },
  plugins: [],
};
