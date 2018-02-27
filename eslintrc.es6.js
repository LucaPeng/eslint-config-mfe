module.exports = {
  extends: [
    'airbnb-base',
    './eslintrc.base.js'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Promise: true,
    Analytics: true,
  }
};
