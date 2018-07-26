<template>
<div class='right-column'>
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
</style>