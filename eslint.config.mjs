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
  },
})
