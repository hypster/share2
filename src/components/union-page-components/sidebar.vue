<template>
<div class='sidebar'>
    <ul>
        <li><a href=''>联盟介绍</a></li>
        <li><a href=''>联盟服务</a></li>
        <li><a href=''>联盟活动</a></li>
        <li><a href=''>联盟会员</a></li>
    </ul>
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
<style lang="stylus">
.sidebar
  background-color: #fff
  $lineheight = (150/2)px
  ul
    display: flex
    flex-direction: column
  li
    height: $lineheight
    line-height: $lineheight
    padding-left: 4em


</style>