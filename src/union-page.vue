<template>
<div class='union-page'>
<div class='wrapper'>
  <sidebar class='sidebar'></sidebar>
  <right-column class='right-column'></right-column>
</div>
</div>
</template>
<script>
import sidebar from '@/components/union-page-components/sidebar'
import rightColumn from '@/components/union-page-components/right-column'
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
<style lang='stylus'>
.union-page
  background-color: #f0f2f5
  padding-bottom: 20px
  .wrapper
    display: flex
    width: 800px
    margin: 0 auto
    .sidebar
      flex: 0 0 (357/2)px
      margin-right: 20px
      margin-top: 20px
    .right-column
      flex: 1 1 0
      margin-top: 20px
</style>