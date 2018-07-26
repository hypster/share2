<template>
<div class='video-page'>
<div class='wrapper'>
  <right-column class='right-column'></right-column>
  <sidebar class='sidebar'></sidebar>
</div>
</div>
</template>
<script>
import sidebar from '@/components/video-page-components/sidebar'
import rightColumn from '@/components/video-page-components/right-column'
export default {
    data () {
        return {}
    },
    components: {
        sidebar,
        rightColumn
    }
}
</script>
<style lang='stylus' scoped>
.video-page
  background-color: #f0f2f5
  // padding-top: 20px
  padding 20px
  display flex
  .wrapper
    display: flex
    width: 100%
    margin: 0 auto
    justify-content: space-between
    background-color: #f0f2f5
  .sidebar
    flex 1
  .right-column
    flex 2.15
</style>