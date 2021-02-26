<!--
 * @Description: 切换语言
 * @LastEditTime: 2021-02-26 20:51:00
-->
<template>
  <a-select v-model:value="modelValue" style="width: 89px;" @change="onChange">
    <a-select-option value="zh_CN">
      zh_CN
    </a-select-option>

    <a-select-option value="en_US">
      en_US
    </a-select-option>

    <a-select-option value="ja_JP">
      ja_JP
    </a-select-option>
  </a-select>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
      },
    },
    emits: ['update:modelValue'],
    methods: {
      onChange(value) {
        this.$emit('update:modelValue', value)
      },
    },
  }
</script>

<style scoped lang="scss"></style>
