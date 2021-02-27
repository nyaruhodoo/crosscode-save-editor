<!--
 * @Description: 切换语言
 * @LastEditTime: 2021-02-27 14:58:06
-->
<template>
  <a-select v-model:value="modelValue" style="width: 89px;" @change="onChange">
    <a-select-option value="zh_CN">
      zh_CN
    </a-select-option>

    <a-select-option value="en_US">
      en_US
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

<style scoped lang="scss">
  .ant-select {
    position: absolute;
    top: 50px;
    right: 50px;
  }
</style>
