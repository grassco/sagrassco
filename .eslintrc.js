module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended', 'plugin:react/recommended', 'plugin:@next/next/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    quotes: ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }],
    curly: 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', '.next/', '*__tests__*'],
};