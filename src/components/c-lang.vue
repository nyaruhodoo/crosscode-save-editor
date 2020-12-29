<template>
  <a-dropdown class="lang-box" placement="bottomCenter">
    <a-button>{{ $root.lang }}</a-button>
    <template #overlay>
      <a-menu>
        <a-menu-item
          v-for="(i, index) of btnsLang"
          :key="index"
          @click="$root.lang = i"
        >
          <div class="itme">{{ i }}</div>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
  export default {
    data() {
      return {
        lang: ['zh_CN', 'ja_JP', 'en_US']
      }
    },
    computed: {
      btnsLang() {
        return this.lang.filter((i) => i !== this.$root.lang)
      }
    }
  }
</script>

<style scoped lang="scss">
  .lang-box {
    position: absolute;
    top: 25px;
    right: 25px;
  }

  ::v-deep .item {
    background-color: #fff;
  }
</style>
