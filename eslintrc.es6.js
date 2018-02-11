const baseConfig = require('./eslintrc.base');

module.exports = Object.assign(baseConfig, {
  parser: 'babel-eslint'
});