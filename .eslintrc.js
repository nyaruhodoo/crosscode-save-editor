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
    'vue/attributes-order': 'warn',
    'vue/component-tags-order': 'warn',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-model-argument': 'off',

    // 为了方便就不遵循单向数据流了
    'vue/no-mutating-props': 'off'
  },

  extends: ['plugin:vue/essential', '@vue/standard', 'prettier']
}
