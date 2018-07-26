<template>
<div class='app-market'>
  <div class='app' v-for='i in 5'>
    <img src='/static/img/app.png'></img>
    <p>应用名称</p>
    <a @click.prevent href=''>下载</a>
  </div>
</div>
</template>
<script>
    export default {
         data () {
            return {
                
            }
        }
    }
</script>
<style lang='stylus' scoped>
.app-market
  .app
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 20px
    margin-right 3em
    img
      width: 50px
      height: 50px
</style>