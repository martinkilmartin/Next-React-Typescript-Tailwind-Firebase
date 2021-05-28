module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: (theme) => ({
        doonagoreXXL:
          "url('/img/xxl/jordan-harrison-dame-lane-dublin-ireland-2400w.jpg')",
        doonagoreXL:
          "url('/img/xl/jordan-harrison-dame-lane-dublin-ireland-1920w.jpg')",
        doonagoreLG:
          "url('/img/lg/jordan-harrison-dame-lane-dublin-ireland-1536w.jpg')",
        doonagoreMD:
          "url('/img/md/jordan-harrison-dame-lane-dublin-ireland-1280w.jpg')",
        doonagoreSM:
          "url('/img/sm/jordan-harrison-dame-lane-dublin-ireland-800w.jpg')",
        doonagoreXS:
          "url('/img/xs/jordan-harrison-dame-lane-dublin-ireland-500w.jpg')",
        doonagoreXXS:
          "url('/img/xxs/jordan-harrison-dame-lane-dublin-ireland-300w.jpg')",
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
  plugins: [require('daisyui')],
}
