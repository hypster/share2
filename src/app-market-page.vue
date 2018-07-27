<template>
<div class='app-market-page'>
    <div class='wrapper'>
      <v-market></v-market>
        <!-- <img src='./components/app-market-page-components/zhihuidao.jpg'></img>
        <img src='./components/app-market-page-components/zhongwenzaixian.jpg'></img>
        <img src='./components/app-market-page-components/haoxuejiaoyu.jpg'></img>
        <img src='./components/app-market-page-components/zhihuishu.jpg'></img> -->
    </div>
</div>
</template>
<script>
import vMarket from '@/components/main-page-components/app-market'
export default {
    data () {
        return {

        }
    },
    components: {
      vMarket
    }
}
</script>
<style lang="stylus" scoped>
.app-market-page
  display: block
  padding-top: 20px
  .wrapper
    display: block
    padding: 20px
    text-align: center
    background-color: #fff
    img
      width: (300/2)px
</style>