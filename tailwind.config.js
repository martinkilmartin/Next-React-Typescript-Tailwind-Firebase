module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    container: {
      center: true,
      width: {
        DEFAULT: '100%',
      },
    },
    extend: {
      backgroundImage: () => ({
        heroLandscapeXXL:
          "url('/img/xxl/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-2400w.jpg')",
        heroLandscapeXL:
          "url('/img/xl/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-1920w.jpg')",
        heroLandscapeLG:
          "url('/img/lg/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-1536w.jpg')",
        heroLandscapeMD:
          "url('/img/md/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-1280w.jpg')",
        heroLandscapeSM:
          "url('/img/sm/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-800w.jpg')",
        heroLandscapeXS:
          "url('/img/xs/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-500w.jpg')",
        heroLandscapeXXS:
          "url('/img/xxs/david-creedon-boating-fishing-gouganebarra-lake-gougane-forest-park-co-cork-ireland-300w.jpg')",
        heroPortraitXXL:
          "url('/img/xxl/chris-hill-currach-boat-gouganebarra-lake-st-finbarrs-oratory-gougane-barra-co-cork-ireland-2400w.jpg')",
        heroPortraitXL:
          "url('/img/xl/chris-hill-currach-boat-gouganebarra-lake-st-finbarrs-oratory-gougane-barra-co-cork-ireland-1920w.jpg')",
        heroPortraitLG:
          "url('/img/lg/chris-hill-currach-boat-gouganebarra-lake-st-finbarrs-oratory-gougane-barra-co-cork-ireland-1536w.jpg')",
        heroPortraitMD:
          "url('/img/md/chris-hill-currach-boat-gouganebarra-lake-st-finbarrs-oratory-gougane-barra-co-cork-ireland-1280w.jpg')",
        heroPortraitSM:
          "url('/img/sm/chris-hill-currach-boat-gouganebarra-lake-st-finbarrs-oratory-gougane-barra-co-cork-ireland-800w.jpg')",
        heroPortraitXS:
          "url('/img/xs/chris-hill-currach-boat-gouganebarra-lake-st-finbarrs-oratory-gougane-barra-co-cork-ireland-500w.jpg')",
        heroPortraitXXS:
          "url('/img/xxs/chris-hill-currach-boat-gouganebarra-lake-st-finbarrs-oratory-gougane-barra-co-cork-ireland-300w.jpg')",
      }),
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
      screens: {
        landscape: { raw: '(orientation: landscape)' },
        portrait: { raw: '(orientation: portrait)' },
      },
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
