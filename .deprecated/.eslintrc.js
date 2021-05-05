module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['lodash'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:lodash/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    window: true,
    document: true,
    FileReader: true,
    caches: true,
  },
  rules: {
    // general
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': 0,
    'no-return-assign': 0,
    'object-curly-newline': 0,
    'max-len': ['error', { code: 160 }],
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'arrow-parens': 'off',
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-console': 1,
    'no-debugger': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_embedded',
          '_env_',
          '_page',
          '__typename',
        ],
      },
    ],
    // react
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-multi-spaces': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.tsx',
        ],
      },
    ],
    // import
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
    // jsx-a11y
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    // lodash
    'lodash/import-scope': [
      2,
      'member',
    ],
    'lodash/prefer-lodash-method': [2, { ignoreMethods: ['replace'] }],
    // typescript
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
  },
};