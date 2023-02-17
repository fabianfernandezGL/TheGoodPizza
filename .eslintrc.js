module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    // 'plugin:import/recommended',
    // 'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    // 'formatjs',
    // 'testing-library',
  ],
  rules: {
    'require-jsdoc': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // 'import/no-named-as-default-member': 'error',
    // 'import/order': [
    //   'warn',
    //   {
    //     'newlines-between': 'always',
    //     groups: [
    //       'builtin',
    //       'external',
    //       ['internal', 'parent'],
    //       'sibling',
    //       'index',
    //     ],
    //   },
    // ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    // 'import/resolver': {
    //   typescript: true,
    //   node: true,
    // },
  },
  // root: true,
}
