const { lineHeight } = require("@material-ui/system");

module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/introbottom.jpg')",
        'step-image': "url('/aboutsecondbg.jpg')",
        'menber-image': "url('/teacherbg.jpg')",
        'keisuke_someya': "url('/keisuke_someya.jpg')",
        'studyContents-image': "url('/classbg.jpg')",
        'whyBangkok-image': "url('/bangkokbg.jpg')",
        'notVolunteer-image':"url('/specialdetail.jpg')",
      }),
      spacing: {
        "250":"250px",
      },
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100%',
      '16': '4rem',
      },
    backgroundColor: theme => ({
      ...theme("colors"),
      "DocumentColor": "#ebb94d",
      "ExplanationColor": "#fef5e0",
      "StepColor": "#016ea9",
      "FlowColor": "#fef5e0",
      "BenefitColor": "#f7c23c",
      "submitColor": "#da6b64",
      "footerColor":"#ececec",
    }),
    borderColor: theme => ({
      ...theme("colors"),
      // DEFAULT: theme('colors.gray.300', 'currentColor'),
      "DocumentColor": "#ebb94d",
      "studyContentsColor": "#016ea9",
      "liColor":"e5e5e5",
    }),
    textColor: theme => theme('colors'),
    textColor: {
      'black':'#000',
      'white': '#fff',
      "red":'#f56565',
      'mainColor':"#ebb94d",
    }
  },
  plugins: [],
}
