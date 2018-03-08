module.exports = {
  extends: [
    'airbnb',
    './eslintrc.base.js'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  rules: {
    // jsx 使用 4 空格缩进
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    // 使用 jsx-index 限制即可
    'react/jsx-closing-tag-location': 'off',
    // propTypes 不需要限制的这么严格
    'react/forbid-prop-types': 'off',
    'react/sort-comp': 'off',
    'react/jsx-no-bind': 'off',
    'react/prefer-stateless-function': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    // 根据实际情况判断使用即可
    'react/jsx-no-target-blank': 'off',
  }
};
