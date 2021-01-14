module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/attributes-order': 'warn',
    'vue/component-tags-order': 'warn'
  },

  extends: ['plugin:vue/base', '@vue/standard', 'prettier']
}
