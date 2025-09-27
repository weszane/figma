import { antfu } from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  ignores: ['index.js', 'transform'],
  rules: {
    'no-case-declarations': 'off',
    'prefer-const': 'off',
    'ts/no-this-alias': 'off',
    'ts/no-namespace': 'off',
    'unicorn/prefer-number-properties': 'off',
    'import/no-mutable-exports': 'off',
    'no-restricted-globals': 'off',
    'no-use-before-define': 'off',
    'jsdoc/check-param-names': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-async-promise-executor': 'off',
    'no-console': 'off',
    'ts/no-use-before-define': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
    'regexp/no-unused-capturing-group': 'off',
  },
})
