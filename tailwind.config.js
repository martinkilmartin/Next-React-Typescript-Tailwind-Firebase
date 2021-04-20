module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // false or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: (theme) => ({
        doonagore:
          "url('/img/jesse-gardner-Doonagore-Castle-fort-of-the-goats-Doolin-Co-Clare-Ireland.jpg')",
      }),
      zIndex: {
        "-1": "-1",
        "-2": "-2",
        "-3": "-3",
        "-4": "-4",
        "-5": "-5",
        "-6": "-6",
        "-7": "-7",
        "-8": "-8",
        "-9": "-9",
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
