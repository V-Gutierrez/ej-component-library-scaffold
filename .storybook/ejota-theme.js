// .storybook/YourTheme.js

import { create } from '@storybook/theming'

export default create({
  base: 'light',

  colorPrimary: '#FCDB3A',
  colorSecondary: '#009639',

  // UI
  appBg: '#EFEFEF',
  appContentBg: '#EFEFEF',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#009639',
  barBg: '#EFEFEF',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'EJOTA',
  brandUrl: 'https://new.education-journey.com',
  brandImage: 'https://new.education-journey.com/img/logosvg.svg'
})
