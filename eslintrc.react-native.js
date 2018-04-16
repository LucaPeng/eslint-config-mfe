module.exports = {
  extends: [
    'airbnb',
    './eslintrc.base.js',
    './eslintrc.react.js'
  ],
  plugins: [
    'react',
    'react-native'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'react-native/react-native': true
  },
  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error'
  }
};
