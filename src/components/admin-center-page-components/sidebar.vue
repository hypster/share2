<template>
<div class='sidebar'>
    <ul>
        <li><router-link :to='{name: "admin center"}' @click.prevent href=''>管理中心</router-link></li>
        <li><router-link :to='{name: "tech center"}' @click.prevent href=''>技术中心</router-link></li>
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
    text-align: center
    padding-left: 0


</style>