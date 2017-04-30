<template>
  <div id="app">
    <page-header></page-header>
    <page-nav></page-nav>
    <router-view></router-view>
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
