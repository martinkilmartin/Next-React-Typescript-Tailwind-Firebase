module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: (theme) => ({
        doonagoreXXL:
          "url('/img/xxl/xxl-jesse-gardner-doonagore-castle-fort-of-the-goats-doolin-co-clare-ireland.webp')",
      }),
      zIndex: {
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
        '-10': '-10',
      },
      minHeight: {
        0: '0',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '9/10': '90vh',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
