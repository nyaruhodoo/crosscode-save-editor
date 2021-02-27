<template>
  <!--编辑器-->
  <a-tabs :animated="false" :tab-bar-gutter="0">
    <a-tab-pane key="1" :tab="$root.locale.editor.主人翁">
      <c-editor-lea :player="activeSave.player"></c-editor-lea>
    </a-tab-pane>

    <a-tab-pane key="2" :tab="$root.locale.editor.道具">
      <c-editor-items :items="activeSave.player.items"></c-editor-items>
    </a-tab-pane>

    <a-tab-pane key="3" :tab="$root.locale.editor.二周目">
      <c-editor-hard-mode :plus="activeSave.newGamePlus"></c-editor-hard-mode>
    </a-tab-pane>

    <a-tab-pane key="4" :tab="$root.locale.editor.帮助">
      <c-editor-fqa></c-editor-fqa
    ></a-tab-pane>

    <a-tab-pane key="5" :tab="$root.locale.editor.作者">
      <c-editor-author></c-editor-author>
    </a-tab-pane>

    <!--切换存档按钮-->
    <template #tabBarExtraContent>
      <a-button
        v-if="save.slots.length"
        class="switch-btn"
        type="primary"
        @click="showSavesUl = !showSavesUl"
        >{{ $root.locale.editor.切换存档 }}</a-button
      >
    </template>
  </a-tabs>

  <!--存档列表-->
  <transition>
    <ul v-if="save.slots.length" v-show="showSavesUl" class="saves-ul">
      <li
        v-for="(saveLi, saveLiIndex) of saves"
        :key="saveLiIndex"
        :class="{ 'active-save': activeIndex === saveLiIndex }"
        class="save-li"
        @click="switchSave(saveLiIndex)"
      >
        <div class="save-number">
          {{ !saveLiIndex ? 'auto' : numberFormat(saveLiIndex) }}
        </div>
        <div>{{ $root.locale.editor.等级 }}: {{ saveLi.player.level }}</div>
        <div>{{ $root.locale.editor.金钱 }}: {{ saveLi.player.credit }}</div>
        <div>
          {{ $root.locale.editor.地图 }}:
          {{
            saveLi.area[$root.activeLang] +
              ' ' +
              saveLi.specialMap[$root.activeLang]
          }}
        </div>
        <div>
          {{ $root.locale.editor.剧情 }}:
          {{ numberFormat(saveLi.player.chapter + 1) }}
        </div>
        <div>
          {{ $root.locale.editor.游玩时间 }}:
          {{ timeFormat(saveLi.playtime) }}
        </div>
      </li>
    </ul>
  </transition>
</template>

<script>
  import CEditorLea from './CEditorLea.vue'
  import CEditorItems from './CEditorItems.vue'
  import CEditorHardMode from './CEditorHardMode.vue'
  import CEditorFqa from './CEditorFqa.vue'
  import CEditorAuthor from './CEditorAuthor.vue'

  import saveFix from '@/util/saveFix.js'
  import { numberFormat, timeFormat } from '@/util/stringFormat.js'

  export default {
    components: {
      CEditorLea,
      CEditorItems,
      CEditorHardMode,
      CEditorFqa,
      CEditorAuthor,
    },

    props: {
      save: {
        type: Object,
      },
    },

    data() {
      return {
        showSavesUl: false,

        // 默认选中auto存档
        activeIndex: 0,
      }
    },

    computed: {
      // 方便遍历把存档组合为一个数组
      saves() {
        const {
          save: { autoSlot, slots },
        } = this
        return [autoSlot, ...slots]
      },

      activeSave() {
        const { save, activeIndex } = this
        const ret = activeIndex ? save.slots[activeIndex - 1] : save.autoSlot

        // 处理兼容性问题
        saveFix(ret)

        return ret
      },
    },

    methods: {
      switchSave(index) {
        this.activeIndex = index
        this.showSavesUl = false
      },

      numberFormat,
      timeFormat,
    },
  }
</script>

<style scoped lang="scss">
  .ant-tabs {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 640px;
    height: 400px;
    background-color: rgba($color: #fff, $alpha: 0.8);
    border-radius: 10px;
    transform: translate(-50%, -45%);

    // 切换存档按钮
    .switch-btn {
      margin-right: 10px;
      border-radius: 10px;
    }

    // 内容区左右距离,默认有上内边距
    ::v-deep .ant-tabs-top-content {
      padding: 0 30px;
    }
  }

  .saves-ul {
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: auto;
    width: 300px;
    height: 380px;
    padding: 10px;
    border: 1px solid;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    transform: translate(-50%, -60%);

    .save-li {
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
        font-size: 17px;
        font-weight: 700;
        text-align: right;
      }
    }
  }
</style>
