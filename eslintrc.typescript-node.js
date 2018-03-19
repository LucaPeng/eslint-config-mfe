module.exports = {
  extends: './eslintrc.typescript.js',
  plugins: [
    'node',
    'typescript'
  ],
  rules: {
    // ts will trans code to specify ecma version, no need to check unsupported-features
    'node/no-unsupported-features': 'off',
    // 基于构建框架会对资源索引进行一些模式化的设计，关闭关于模块引入的一些规则
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/first': 'off'
  }
};