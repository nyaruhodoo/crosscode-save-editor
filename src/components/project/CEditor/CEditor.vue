<template>
  <!--编辑器-->
  <a-tabs :animated="false" :tabBarGutter="0">
    <a-tab-pane key="1" tab="主人翁">
      <c-editor-lea :player="activeSave.player"></c-editor-lea>
    </a-tab-pane>

    <a-tab-pane key="2" tab="道具">
      <c-editor-item :items="activeSave.player.items"></c-editor-item>
    </a-tab-pane>

    <a-tab-pane key="3" tab="二周目">
      <c-editor-hard-mode :plus="activeSave.newGamePlus"></c-editor-hard-mode>
    </a-tab-pane>

    <a-tab-pane key="4" tab="FQA"> <c-editor-fqa></c-editor-fqa></a-tab-pane>

    <a-tab-pane key="5" tab="作者">
      <c-editor-author></c-editor-author>
    </a-tab-pane>

    <!--切换存档按钮-->
    <template #tabBarExtraContent>
      <a-button
        v-if="save.slots.length"
        class="switch-save"
        type="primary"
        @click="showSaves = !showSaves"
        >切换存档</a-button
      >
    </template>
  </a-tabs>

  <!--存档列表-->
  <transition>
    <div v-if="save.slots.length" v-show="showSaves" class="saves">
      <div
        v-for="(i, index) of saves"
        :key="index"
        :class="{ 'active-save': activeIndex === index }"
        class="save"
        :bordered="false"
        @click="switchSave(index)"
      >
        <div class="save-number">
          {{ !index ? 'auto' : numberFormat(index) }}
        </div>
        <div>游玩时间: {{ timeFormat(i.playtime) }}</div>
        <div>角色等级: {{ i.player.level }}</div>
        <div>信用点: {{ i.player.credit }}</div>
        <div>所在地图: {{ mapFormat(i.area, i.specialMap) }}</div>
        <div>剧情章节: {{ numberFormat(i.player.chapter + 1) }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import CEditorLea from './CEditorLea.vue'
  import CEditorItem from './CEditorItem.vue'
  import CEditorHardMode from './CEditorHardMode.vue'
  import CEditorFqa from './CEditorFqa.vue'
  import CEditorAuthor from './CEditorAuthor.vue'
  import saveFix from '@/util/saveFix.js'
  import { srtingFormat } from '@/util/stringFormat.js'

  export default {
    props: ['save'],

    components: {
      CEditorLea,
      CEditorItem,
      CEditorHardMode,
      CEditorFqa,
      CEditorAuthor
    },

    data() {
      return {
        showSaves: false,

        // 默认是auto存档
        activeIndex: 0
      }
    },

    methods: {
      switchSave(index) {
        this.activeIndex = index
        this.showSaves = false
      },

      numberFormat(number) {
        return number.toString().padStart(2, '0')
      },
      mapFormat(map1, map2) {
        return `${srtingFormat(map1.zh_CN)} ${srtingFormat(map2.zh_CN)}`
      },
      timeFormat(time) {
        const _ = Number.parseInt
        const { numberFormat } = this

        return `
          ${numberFormat(_(time / 60 / 60))} :
          ${numberFormat(_(time / 60) % 60)} :
          ${numberFormat(_(time % 60))}
        `
      }
    },

    computed: {
      // 方便遍历把存档组合为一个数组
      saves() {
        const {
          save: { autoSlot, slots }
        } = this
        return [autoSlot, ...slots]
      },

      activeSave() {
        const { save, activeIndex } = this
        const ret = activeIndex ? save.slots[activeIndex - 1] : save.autoSlot

        // 处理兼容性问题
        saveFix(ret)

        return ret
      }
    }
  }
</script>

<style scoped lang="scss">
  .ant-tabs {
    width: 640px;
    height: 400px;
    background-color: rgba($color: #fff, $alpha: 0.8);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -45%);

    // 切换存档按钮
    .switch-save {
      border-radius: 10px;
      margin-right: 10px;
    }

    // 内容区左右距离
    ::v-deep .ant-tabs-top-content {
      padding: 0 30px;
    }
  }

  .saves {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    width: 300px;
    height: 380px;
    background-color: #fff;
    border: 1px solid;
    border-radius: 5px;
    overflow: auto;
    text-align: center;
    padding: 10px;

    .save {
      transition: 0.25s;

      & ~ .save {
        margin-top: 15px;
      }

      &:hover {
        color: rgba(24, 95, 189, 0.5);
      }

      &.active-save {
        color: rgb(0, 108, 250);
      }

      .save-number {
        text-align: right;
        font-weight: 700;
        font-size: 17px;
      }
    }
  }
</style>
