module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:boundaries/recommended',
    'prettier',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'boundaries'
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-console': 'warn', //use loglevel-debug package instead
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/quotes': ['error', 'single']
  },
  ignorePatterns: ['*.config.js', '.env*'],
  settings: {
    react: {
      version: 'detect'
    },
    'boundaries/elements': [
      {
        'type': 'helpers',
        'pattern': 'helpers/*'
      },
      {
        'type': 'components',
        'pattern': 'components/*'
      },
      {
        'type': 'containers',
        'pattern': 'containers/*'
      },
      {
        'type': 'pages',
        'pattern': 'pages/*'
      },
      {
        'type': 'modules',
        'pattern': 'modules/*'
      }
    ]
  }
}
