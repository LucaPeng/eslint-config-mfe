module.exports = {
  extends: './eslintrc.typescript.js',
  plugins: [
    'node',
    'typescript'
  ],
  rules: {
    // ts will trans code to specify ecma version, no need to check unsupported-features
    'node/no-unsupported-features': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/first': 'off'
  }
};