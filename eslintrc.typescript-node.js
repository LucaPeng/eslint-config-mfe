module.exports = {
  extends: [
    './eslintrc.node.js',
    './eslintrc.typescript.js'
  ],
  setting: {
    'import/ignore': [
      '\\.(ts|tsx)$'
    ]
  }
};