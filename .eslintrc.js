module.exports = {
  settings: {
    'import/core-modules': ['@expo/vector-icons'],
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
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
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-extra-semi': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-unexpected-multiline': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
  },
  ignorePatterns: ['backend/*', 'node_modules/*'],
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEV__: true,
  },
};
