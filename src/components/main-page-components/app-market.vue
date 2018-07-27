<template>
<div class='app-market'>
  <div class='app' v-for='(l, i) in links' :key='i'>
    <i :style="{backgroundColor: colors[i]}"></i>
    <a target="_blank" :href="l[1]"><p>{{l[0]}}</p></a>
  </div>
</div>
</template>
<script>
let links = [
  ['高校无线通',	'http://xxb.shnu.edu.cn/172/list.htm'],
  ['上海市东北片普通高校教学协作信息网', 'http://www.kxxfx.shec.edu.cn/Study/user/default.aspx'],
  ['慧源', 'http://www.kxzy.sh.edu.cn/home'],
  ['智慧树','http://www.zhihuishu.com/'],
  ['上海教科网协作平台', 'http://cs.shec.edu.cn/']
]
let colors = [
  '#74adb1', '	#baefee', '#2abbec', '#010a4b', '#043ea7'
]
    export default {
         data () {
            return {
                links,
                colors
            }
        }
    }
</script>
<style lang='stylus' scoped>
.app-market
  padding-top 2em
  .app
    display: flex
    justify-content: flex-start
    align-items: center
    margin-bottom: 3em
    p
      margin-bottom 0
    img
      width: 50px
      height: 50px
    i
      width 16px
      height 16px
      margin-right 1em
</style>