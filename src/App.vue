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
article
  p, li
    font-family 'Microsoft Yahei', 'Times New Roman', Times, serif
    color: #2f2f2f;
    word-break: break-word!important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  p, li
    margin-bottom 1em
    line-height 1.5
    ul
      margin-top 1em
      padding-left 1em
a.active
  color #28f2ff
.router-link-active
  padding-bottom 10px
  border-bottom 6px solid #28f2ff
.page-header .router-link-active, .primary .router-link-active
  padding-bottom 0
  border-bottom 0
</style>
