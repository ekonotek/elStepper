module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'plugin:import/errors', 'plugin:import/warnings'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'warn',
        'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
        'react/prop-types': 'off',
        'react/no-array-index-key': 'warn',
        'no-nested-ternary': 'off',
        'react/jsx-props-no-spreading': 0,
        'no-unused-vars': 'warn',
        'consistent-return': 'off',
    },
};
