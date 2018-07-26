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
<style lang='stylus'>
.right-column
  padding: 2em
  background-color: #fff
</style>