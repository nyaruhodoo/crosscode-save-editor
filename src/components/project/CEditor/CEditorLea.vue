<template>
  <div class="li">
    <span>等级: </span>
    <a-input-number
      id="inputNumber"
      v-model:value="player.level"
      style="width: 55px"
      :min="1"
      :max="99"
      :precision="0"
      @change="numberChange"
    />
  </div>

  <div class="li">
    <a-button type="primary" @click="player.credit = 9999999"
      >无限金钱</a-button
    >
  </div>

  <div class="li">
    <a-tooltip placement="right">
      <template #title>
        <span>获取新元素时请重新使用</span>
      </template>
      <a-button type="primary" @click="skillPointsMax">无限技能点</a-button>
    </a-tooltip>
  </div>
</template>

<script>
  export default {
    props: ['player'],
    methods: {
      // 修复输入框组件的BUG
      numberChange(value) {
        if (!value) this.player.level = 1
      },

      skillPointsMax() {
        this.player.skillPoints = [99, 99, 99, 99, 99]

        // 附送电路覆写
        this.player.items[428] = 99
      }
    }
  }
</script>

<style scoped lang="scss">
  .li ~ .li {
    margin-top: 20px;
  }
</style>
