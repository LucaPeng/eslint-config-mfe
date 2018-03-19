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
    // 在 node 中使用 console 在 terminal 中进行输出是一种正常的编码方式
    'no-console': 'off',
    // 对参数属性的修改在处理可变数据时是必要的
    'no-param-reassign': ['error', { 'props': false }],
    // 限制过于严格 
    'prefer-promise-reject-errors': 'off',
  }
};
