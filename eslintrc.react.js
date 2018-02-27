module.exports = {
  extends: [
    'airbnb',
    './eslintrc.base.js'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/sort-comp': [0],
    'react/jsx-no-bind': [0],
    'react/prefer-stateless-function': [0],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0
  }
};
