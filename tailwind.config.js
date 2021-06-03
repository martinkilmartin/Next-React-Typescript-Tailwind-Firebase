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
          "url('/img/xxl/jordan-harrison-dame-lane-dublin-ireland-2400w.jpg')",
        heroLandscapeXL:
          "url('/img/xl/jordan-harrison-dame-lane-dublin-ireland-1920w.jpg')",
        heroLandscapeLG:
          "url('/img/lg/jordan-harrison-dame-lane-dublin-ireland-1536w.jpg')",
        heroLandscapeMD:
          "url('/img/md/jordan-harrison-dame-lane-dublin-ireland-1280w.jpg')",
        heroLandscapeSM:
          "url('/img/sm/jordan-harrison-dame-lane-dublin-ireland-800w.jpg')",
        heroLandscapeXS:
          "url('/img/xs/jordan-harrison-dame-lane-dublin-ireland-500w.jpg')",
        heroLandscapeXXS:
          "url('/img/xxs/jordan-harrison-dame-lane-dublin-ireland-300w.jpg')",
        heroPortraitXXL:
          "url('/img/xxl/jordan-harrison-dame-lane-dublin-ireland-2400w.jpg')",
        heroPortraitXL:
          "url('/img/xl/jordan-harrison-dame-lane-dublin-ireland-1920w.jpg')",
        heroPortraitLG:
          "url('/img/lg/jordan-harrison-dame-lane-dublin-ireland-1536w.jpg')",
        heroPortraitMD:
          "url('/img/md/jordan-harrison-dame-lane-dublin-ireland-1280w.jpg')",
        heroPortraitSM:
          "url('/img/sm/jordan-harrison-dame-lane-dublin-ireland-800w.jpg')",
        heroPortraitXS:
          "url('/img/xs/jordan-harrison-dame-lane-dublin-ireland-500w.jpg')",
        heroPortraitXXS:
          "url('/img/xxs/jordan-harrison-dame-lane-dublin-ireland-300w.jpg')",
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
