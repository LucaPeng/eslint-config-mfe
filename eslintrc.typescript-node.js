module.exports = {
  extends: './eslintrc.typescript.js',
  plugins: [
    'node',
    'typescript'
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/first': 'off'
  }
};