<template>
  <div class="fqa-li">
    <div class="title">{{ $root.locale.editorFqa[0][0] }}</div>
    <div class="answer">{{ $root.locale.editorFqa[0][1] }}</div>
  </div>

  <div class="fqa-li">
    <div class="title">{{ $root.locale.editorFqa[1][0] }}</div>
    <div class="answer">
      {{ $root.locale.editorFqa[1][1] }}
    </div>
  </div>

  <div class="fqa-li">
    <div class="title">{{ $root.locale.editorFqa[2][0] }}</div>
    <div class="answer">
      {{ $root.locale.editorFqa[2][1] }}
    </div>
  </div>

  <div class="fqa-li">
    <div class="title">{{ $root.locale.editorFqa[3][0] }}</div>
    <div class="answer">{{ $root.locale.editorFqa[3][1] }}</div>
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
      color: red;
      font-size: 18px;
      font-weight: 700;
    }
  }
</style>
