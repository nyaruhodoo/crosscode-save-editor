<template>
  <a-tabs :animated="false">
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

  <transition>
    <div v-show="showSaves" class="saves">
      <a-card
        v-for="(i, index) of saves"
        :key="index"
        :bordered="false"
        @click="clickSave(index)"
      >
        <!--垃圾组件,不合并class只好外套个-->
        <div :class="{ active: active === index }">
          <div class="number">
            存档编号: {{ !index ? 'auto' : numberFormat(index) }}
          </div>
          <div class="chapter">
            剧情章节: {{ numberFormat(i.player.chapter + 1) }}
          </div>
          <div class="map">所在地图: {{ mapFormat(i.area, i.specialMap) }}</div>

          <div class="play-time">游玩时间: {{ timeFormat(i.playtime) }}</div>
          <div class="level">角色等级: {{ i.player.level }}</div>
          <div class="credit">信用点: {{ i.player.credit }}</div>
        </div>
      </a-card>
    </div>
  </transition>
</template>

<script>
  import CEditorLea from './CEditorLea.vue'
  import CEditorItem from './CEditorItem.vue'
  import CEditorHardMode from './CEditorHardMode.vue'
  import CEditorFqa from './CEditorFqa.vue'
  import CEditorAuthor from './CEditorAuthor.vue'
  import { srtingFormat } from '@/util/stringFormat.js'
  import { saveCompatibility } from '@/util/saveCompatibility.js'

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

        // 默认是自动存档
        active: 0
      }
    },
    methods: {
      numberFormat(number) {
        return number.toString().padStart(2, '0')
      },
      mapFormat(map1, map2) {
        return `${srtingFormat(map1.zh_CN)} - ${srtingFormat(map2.zh_CN)}`
      },
      timeFormat(time) {
        const _ = Number.parseInt
        const { numberFormat } = this

        return `
          ${numberFormat(_(time / 60 / 60))} :
          ${numberFormat(_(time / 60) % 60)} :
          ${numberFormat(_(time % 60))}
        `
      },
      clickSave(index) {
        this.active = index
        this.showSaves = false
      }
    },
    computed: {
      saves() {
        const { save } = this
        const ret = [save.autoSlot, ...save.slots]

        return ret
      },
      activeSave() {
        const { save, active } = this
        const ret = active ? save.slots[active - 1] : save.autoSlot

        // 处理兼容性问题
        saveCompatibility(ret)

        return ret
      }
    }
  }
</script>

<style scoped lang="scss">
  .ant-tabs {
    width: 600px;
    height: 400px;
    background-color: rgba($color: #fff, $alpha: 0.8);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);

    // 切换存档按钮
    .switch-save {
      border-radius: 10px;
      margin-right: 10px;
    }

    // 内容区左右距离
    .ant-tabs-tabpane {
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
    padding: 15px;
    background-color: #fff;
    border: 1px solid;
    border-radius: 5px;
    overflow: auto;

    .ant-card {
      &:hover {
        color: rgba(24, 95, 189, 0.5);
      }
      & ~ .ant-card {
        border-top: 1px solid;
      }
    }

    .active {
      color: rgb(0, 108, 250);
    }
  }
</style>
