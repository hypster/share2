<template>
<div class='right-column pub-event'>
  <transition name='fade' mode='out-in'>
    <router-view></router-view>
  </transition>
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
<style lang='stylus' scoped>
.right-column
  padding-top: 30px
  background-color: #fff
  li.project    
    padding-left: 0
    position: relative
    padding-left: 1em
    &.icon-play3:before
      position: absolute
      left: 0
      top: 1px
      font-size: 8px
      color: #5486ec
</style>