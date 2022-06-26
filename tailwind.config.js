module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        primary: {
          veryDarkBlue: "#092c4c",
        },
        secondary: {
          sand: "#ffa85b",
        },
      },
    },
  },
  plugins: [],
};
