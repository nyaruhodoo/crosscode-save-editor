<template>
  <div class="bg-lea"></div>
  <c-save @set-save="setSave"></c-save>
  <c-editor v-if="save" :save="save"></c-editor>
  <c-lang></c-lang>
</template>

<script>
  import cSave from '@/components/c-save.vue'
  import cEditor from '@/components/c-editor.vue'
  import cLang from '@/components/c-lang.vue'
  export default {
    components: {
      cSave,
      cEditor,
      cLang
    },
    data() {
      return {
        save: null,
        lang: 'zh_CN'
      }
    },
    methods: {
      setSave(save) {
        this.save = save
      }
    }
  }
</script>

<style lang="scss">
  body {
    cursor: url('~@/assets/img/cursor.png'), auto;
    user-select: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
    padding: 15px 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  #app {
    position: relative;
    width: 100vw;
    height: 100vh;
    min-width: 1280px;
    min-height: 720px;
    background: url('~@/assets/img/bj.png') no-repeat center top;
    background-size: cover;
    animation: yidong ease 2s infinite;
  }

  @keyframes lea-move {
    from {
      background-position: 0 0;
    }

    to {
      background-position: 100% 0;
    }
  }
  .bg-lea {
    width: 460px;
    height: 612px;
    background: url('~@/assets/img/bj-lea.png') no-repeat;
    background-size: cover;
    background-position: 0 0;
    position: absolute;
    right: 1%;
    bottom: 0;
    animation: lea-move steps(5) 0.75s infinite;
  }

  // 全局动画
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.25s ease;
  }
</style>
