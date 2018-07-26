<template>
<div class='iso-community-page'>
<div class='wrapper'>
  <sidebar class='sidebar'></sidebar>
  <div class='right-column'>
    <transition name='fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</div>
</div>
</template>
<script>
import sidebar from '@/components/iso-community-page-components/sidebar'
export default {
    data () {
        return {}
    },
    components: {
        sidebar,
        
    }
}
</script>
<style lang='stylus' scoped>
</style>