const defaultTheme = require("tailwindcss/defaultTheme");

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
      fontFamily: {
        Josefin: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        DmSans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        Syne: ["Syne", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
