module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [2, {
      printWidth: 120,
      singleQuote: true,
      semi: false,
      arrowParens: 'always',
      trailingComma: 'es5'
    }],
    'arrow-parens': [2, 'always'],
    camelcase: [2, { properties: 'never' }],
    curly: [2, 'multi-line'],
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    eqeqeq: 2,
    yoda: 2,
    'block-spacing': 2,
    'computed-property-spacing': 2,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'func-call-spacing': 2,
    'eol-last': 2,
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-undefined': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-multi-assign': 2,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'no-shadow-restricted-names': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-unused-vars': 1,
    'no-alert': 0,
    'no-console': 1,
    'no-useless-constructor': 1,
    'no-constant-condition': [2, { checkLoops: false }],
    'no-duplicate-imports': [2, { includeExports: true }],
    'no-trailing-spaces': 2,
    'no-useless-computed-key': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'space-before-blocks': 2,
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'template-tag-spacing': 2,
    'max-len': [
      2,
      {
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'object-shorthand': 2,
    'object-curly-spacing': [2, 'always'],
    'prefer-const': 2,
    'prefer-arrow-callback': 2,
    'template-curly-spacing': [2, 'never'],
  },
  overrides: [
    {
      files: ['src/*.test.js'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
      }
    }
  ],
}
