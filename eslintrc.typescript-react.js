module.exports = {
  extends: './eslintrc.typescript.js',
  plugins: [
    'react',
    'typescript'
  ],
  rules: {
    //
    // 覆盖掉 eslint-plugin-react 的规则
    //
    // 开启的话 eslint 会报错 Cannot read property 'type' of null
    'react/jsx-indent': 'off',
    // 还不支持 properties https://github.com/yannickcr/eslint-plugin-react/issues/1342
    'react/sort-comp': 'off'
  }
};