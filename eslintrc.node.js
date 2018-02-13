module.exports = {
  extends: [
    "./eslintrc.base.js",
    "plugin:node/recommended"
  ],
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true
  },
  plugins: [
    'node'
  ]
};
