module.exports = {
  settings: {
    'import/core-modules': ['@expo/vector-icons'],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: {
          multiline: false,
        },
      },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
};
