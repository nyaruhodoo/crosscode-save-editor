<template>
  <div class="fqa-li">
    <div class="title">什么是 undefined ?</div>
    <div class="answer">尚未实装的新道具,可以正常使用</div>
  </div>

  <div class="fqa-li">
    <div class="title">添加了任务道具,但是无法完成任务</div>
    <div class="answer">
      请通过游戏正常手段获取<span style="color: red;">最后一次</span>任务物品
    </div>
  </div>

  <div class="fqa-li">
    <div class="title">添加道具后游戏报错</div>
    <div class="answer">
      请直接<span style="color: red;">清空道具</span
      >,因为你添加了当前版本不支持的道具
      <br />
      游戏版本和存档版本可以不相同,所以无法兼容处理
      <br />

      唯一的解决方式是<span style="color: red;"
        >替换道具列表进行手动添加,避免使用一键添加</span
      >
    </div>
  </div>

  <div class="fqa-li">
    <div class="title">功能失效</div>
    <div class="answer">请确定你的游戏版本是否支持</div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .fqa-li {
    & ~ .fqa-li {
      margin-top: 10px;
    }

    .title {
      font-size: 18px;
      font-weight: 700;
    }
  }
</style>
