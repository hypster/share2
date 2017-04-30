<template>
  <div id="app">
    <page-header></page-header>
    <page-nav></page-nav>
    <transition name='fade' mode='out-in'>
    <router-view></router-view>
    </transition>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from './components/page-header'
import pageNav from '@/components/page-nav'
import pageFooter from '@/components/page-footer'
export default {
  name: 'app',
  components: {
    pageHeader,
    pageNav,    
    pageFooter
  }
}
</script>
<style lang='stylus'>
.fade-enter-active, .fade-leave-active {
  transition: all ease .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
