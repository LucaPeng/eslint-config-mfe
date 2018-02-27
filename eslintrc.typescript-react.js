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
    // @fixable 限制 jsx 的 children 缩进规则
    // @off 开启的话 eslint 会报错 Cannot read property 'type' of null
    'react/jsx-indent': 'off',
    // 组件内方法必须按照一定规则排序
    // @off 还不支持 properties https://github.com/yannickcr/eslint-plugin-react/issues/1342
    'react/sort-comp': 'off'
  }
};