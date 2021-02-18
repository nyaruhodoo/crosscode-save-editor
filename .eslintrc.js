module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',

    'no-unused-vars': 'warn',

    // vue3与2的不兼容规则
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-model-argument': 'off',

    // 懒得遵循(对象的情况下)
    'vue/no-mutating-props': 'off',

    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error',
    'vue/no-lone-template': 'error',
    'vue/this-in-template': 'error',
    'vue/no-multiple-slot-args': 'error',
    'vue/no-v-html': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/component-definition-name-casing': 'error',
    'vue/prop-name-casing': 'error',
    'vue/no-template-shadow': 'error',
    'vue/html-quotes': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
  },

  extends: ['plugin:vue/essential', '@vue/standard', 'prettier'],
}
