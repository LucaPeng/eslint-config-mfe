const baseConfig = require('./eslintrc.base');

module.exports = Object.assign(baseConfig, {
  env: {
    node: true
  },
  plugins: [
    'node'
  ],
  extends: [
    "airbnb-base",
    "plugin:node/recommended"
  ],
  globals: {}
});
