<template>
  <div class="bg-lea"></div>

  <!--使用source的原因是因为vue编译时不会处理audio标签的路径,你是要坑死我?-->
  <audio ref="audio" loop>
    <source src="@/assets/muLea.ogg" />
  </audio>

  <c-save :save="save" @set-save="setSave"></c-save>
  <c-editor v-if="save" :save="save"></c-editor>
</template>

<script>
  import CSave from '@/components/project/CSave.vue'
  import CEditor from '@/components/project/CEditor/CEditor.vue'

  export default {
    components: {
      CSave,
      CEditor,
    },

    data() {
      return {
        save: null,
      }
    },

    methods: {
      setSave(save) {
        const {
          $refs: { audio },
        } = this

        this.save = save

        audio.volume = 0.2
        audio.play()
      },
    },
  }
</script>

<style lang="scss">
  #app {
    position: relative;
    width: 100vw;
    min-width: 1280px;
    height: 100vh;
    min-height: 720px;
    background: url('~@/assets/img/bj.png') no-repeat center top;
    background-size: cover;
    cursor: url('~@/assets/img/cursor.png'), auto;
    user-select: none;
  }

  // 全局滚动条样式
  ::-webkit-scrollbar {
    width: 10px;
    padding: 15px 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
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

  @keyframes lea-move {
    to {
      background-position: 100% 0;
    }
  }

  .bg-lea {
    position: absolute;
    right: 1%;
    bottom: 0;
    width: 460px;
    height: 612px;
    animation: lea-move steps(5) 0.75s infinite;
    background: url('~@/assets/img/bj-lea.png') no-repeat;
    background-position: 0 0;
    background-size: cover;
  }
</style>
