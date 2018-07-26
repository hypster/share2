<template>
<div class='sidebar'>
    <ul>
        <li><router-link :to='{name: "introduction"}' @click.prevent href=''>联盟介绍</router-link></li>
        <li><router-link :to='{name: "service"}' @click.prevent href=''>联盟服务</router-link></li>
        <li><router-link :to='{name: "activity"}' @click.prevent href=''>联盟活动</router-link></li>
        <li><router-link :to='{name: "members"}' @click.prevent href=''>联盟会员</router-link></li>
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