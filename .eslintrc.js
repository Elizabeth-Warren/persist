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
    'json',
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': [0],
  },
  overrides: [
    {
      files: ['*.test.js'],
      env: { jest: true }
    },
    {
      files: ['*.stories.js'],
      rules: {
        'import/no-extraneous-dependencies': [0],
      }
    }
  ]
};
