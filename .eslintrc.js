module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': [0],
    'no-underscore-dangle': [0],
    'react/prop-types': [0],
    'import/no-cycle': [0],
    'react/jsx-fragments': [1, 'element'],
    'react/jsx-no-target-blank': [1],
    'no-console': [0, { allow: ['warn', 'error'] }],
    'no-unused-vars': [2, { 'ignoreRestSiblings': true }],

    // Airbnb's rules without the "ForOfStatement"
    // See some of the debate here: https://github.com/airbnb/javascript/issues/1271
    'no-restricted-syntax': [0, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-continue': [0],
  },
};
