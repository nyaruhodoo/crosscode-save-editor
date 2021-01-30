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
    'vue/attributes-order': 'error',
    'vue/component-tags-order': 'error',

    // vue3与2的不兼容规则
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-model-argument': 'off'
  },

  extends: ['plugin:vue/essential', '@vue/standard', 'prettier']
}
