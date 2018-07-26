<template>
  <div>
    <header class='page-header'>
        <router-link class='brand'  tag='h1' :to="{name: 'main page'}">上海教育共享服务平台</router-link>
        <!-- <div>
          <a href='' @click.prevent>新会员指南</a>
          <a href='' @click.prevent>登录</a> <a href='' @click.prevent>申请</a>
        </div> -->
    </header>
    <div class='banner'></div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' scoped>
.page-header
  a, input.icon-search
    font-size: 10px
  .brand
    color black
    &:hover
      cursor: pointer
</style>
