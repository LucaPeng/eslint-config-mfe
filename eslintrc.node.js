module.exports = {
  extends: [
    "airbnb-base",
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
  ],
  rules: {
    // 考虑到在正常逻辑中会使用到，关闭该规则
    'no-process-env': 'off',
    // 考虑到在正常逻辑中会使用到，关闭该规则
    'no-process-exit': 'off',
  }
};
