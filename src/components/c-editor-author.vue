<template>
  <div class="ico">
    <a href="https://github.com/Aadach1"> <GithubOutlined /></a>

    <a href="https://wpa.qq.com/msgrd?V=3&Uin=642886174"><QqOutlined /></a>
  </div>

  <div class="sponsor">
    <h3>你一定忍不住给我打钱吧?</h3>
    <img src="@/assets/img/sponsor.png" />
  </div>
</template>

<script>
  import { GithubOutlined, QqOutlined } from '@ant-design/icons-vue'

  export default {
    components: {
      GithubOutlined,
      QqOutlined
    }
  }
</script>

<style scoped lang="scss">
  .ico {
    text-align: center;
  }
  .anticon {
    font-size: 50px;
    transition: 0.25s;
    margin-right: 30px;

    &:hover {
      color: rgb(26, 98, 194);
    }
  }

  .sponsor {
    font-size: 30px;
    margin-top: 30px;
    text-align: center;
    img {
      width: 300px;
    }
  }
</style>
