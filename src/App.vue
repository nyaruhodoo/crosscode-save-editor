<template>
  <div class="bg-lea"></div>
  <c-save :save="save" @set-save="setSave"></c-save>
  <c-editor v-if="save" :save="save"></c-editor>
</template>

<script>
  import CSave from '@/components/project/CSave.vue'
  import CEditor from '@/components/project/CEditor/CEditor.vue'

  export default {
    components: {
      CSave,
      CEditor
    },

    data() {
      return {
        save: null
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
  }

  @keyframes lea-move {
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
