module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true
    },
    plugins: [
        'vue',
    ],
    extends: [
        'airbnb-base',   // vue 项目不使用 jsx，使用 airbnb-base 配置即可
        './eslintrc.base.js',     
        'plugin:vue/recommended', // extends base config with recommended rules
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.vue', '.json']
            },
        },
    },
    rules: {
        // 当import时，不需要vue后缀
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never',
            'json': 'never',
        }]
    },
};