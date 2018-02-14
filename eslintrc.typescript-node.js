module.exports = {
  extends: [
    './eslintrc.node.js',
    './eslintrc.typescript.js'
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/first': 'off'
  }
};