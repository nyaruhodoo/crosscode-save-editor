<template>
  <div class="ico">
    <a href="https://github.com/psrx/crosscode-save-editor">
      <GithubOutlined
    /></a>
    <p>求Star!</p>
  </div>

  <div class="sponsor">
    <h3>你一定忍不住给我打钱吧?</h3>
    <img src="@/assets/img/sponsor.png" />
  </div>
</template>

<script>
  import { GithubOutlined } from '@ant-design/icons-vue'

  export default {
    components: {
      GithubOutlined
    }
  }
</script>

<style scoped lang="scss">
  .anticon-github.anticon-github {
    margin-right: 0;
    margin-top: 20px;
  }
  .ico {
    text-align: center;
  }
  .anticon {
    font-size: 50px;
    transition: 0.25s;

    &:hover {
      color: rgb(26, 98, 194);
    }
  }

  .sponsor {
    font-size: 30px;
    margin-top: 15px;
    text-align: center;
    img {
      width: 300px;
    }
  }
</style>
