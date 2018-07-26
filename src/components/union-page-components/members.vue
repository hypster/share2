<template>
<div>
<div class='member'>
<img src='../app-market-page-components/zhongwenzaixian.jpg'></img>
<p>中文在线</p>
<a @click.prevent href=''>查看</a>
</div>
<div class='member'>
<img src='../app-market-page-components/zhihuidao.jpg'></img>
<p>智慧岛</p>
<a @click.prevent href=''>查看</a>
</div>
<div class='member'>
<img src='../app-market-page-components/haoxuejiaoyu.jpg'></img>
<p>好学教育</p>
<a @click.prevent href=''>查看</a>
</div>
<div class='member'>
<img src='../app-market-page-components/zhihuishu.jpg'></img>
<p>智慧树</p>
<a @click.prevent href=''>查看</a>
</div>
</div>
</template>
<script>

export default {
    data () {
        return {}
    },
    components: {
    }
}
</script>
<style lang='stylus'>
.member
  display: flex
  justify-content: space-around
  align-items: center
  margin-bottom: 20px
  img
    width: 70px
    // height: 50px
  p
    margin-bottom 0
</style>