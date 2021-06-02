module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: () => ({
        doonagoreXXL:
          "url('/img/xxl/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-2400w.jpg')",
        doonagoreXL:
          "url('/img/xl/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-1920w.jpg')",
        doonagoreLG:
          "url('/img/lg/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-1536w.jpg')",
        doonagoreMD:
          "url('/img/md/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-1280w.jpg')",
        doonagoreSM:
          "url('/img/sm/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-800w.jpg')",
        doonagoreXS:
          "url('/img/xs/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-500w.jpg')",
        doonagoreXXS:
          "url('/img/xxs/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-300w.jpg')",
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
        '2/5': '40vh',
        '1/2': '50vh',
        '3/5': '60vh',
        '3/4': '75vh',
        '9/10': '90vh',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
