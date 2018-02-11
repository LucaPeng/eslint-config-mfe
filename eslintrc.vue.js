const baseConfig = require('./eslintrc.base');

module.exports = Object.assign(baseConfig, {
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    plugins: [
        // https://github.com/vuejs/eslint-plugin-vue
        // vue 插件可以 lint .vue 文件中的 script 和 template
        'vue',
    ],
    extends: [
        'airbnb-base', // vue 项目不使用 jsx，使用 airbnb-base 配置即可
        'plugin:vue/recommended', // extends base config with recommended rules
    ],
    settings: {
        // 让 ESLint 能正确找到vue后缀的文件
        'import/resolver': {
            node: {
                extensions: ['.js', '.vue', '.json']
            },
        },
    },
    rules: Object.assign(baseConfig.rules, {
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never',
            'json': 'never',
        }], // 当import时，不需要vue后缀
    }),
});