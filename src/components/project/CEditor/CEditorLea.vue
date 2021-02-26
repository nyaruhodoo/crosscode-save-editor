<template>
  <div class="editor-li">
    <span>{{ $root.locale.editorLea.等级 }}:</span>
    <a-input-number
      id="inputNumber"
      v-model:value="player.level"
      style="width: 55px;"
      :min="1"
      :max="99"
      :precision="0"
      @change="numberChange"
    />
  </div>

  <div class="editor-li">
    <a-button type="primary" @ceditor-lick="player.credit = 9999999">{{
      $root.locale.editorLea.无限金钱
    }}</a-button>
  </div>

  <div class="editor-li">
    <a-tooltip placement="right">
      <template #title>
        <span>{{ $root.locale.editorLea.技能点提示 }}</span>
      </template>
      <a-button type="primary" @ceditor-lick="skillPointsMax">{{
        $root.locale.editorLea.无限技能点
      }}</a-button>
    </a-tooltip>
  </div>
</template>

<script>
  export default {
    props: {
      player: {
        type: Object,
      },
    },
    methods: {
      // 修复输入框组件的BUG
      numberChange(value) {
        if (!value) this.player.level = 1
      },

      skillPointsMax() {
        this.player.skillPoints = [99, 99, 99, 99, 99]

        // 附送电路覆写
        this.player.items[428] = 99
      },
    },
  }
</script>

<style scoped lang="scss">
  .editor-li ~ .editor-li {
    margin-top: 20px;
  }
</style>
