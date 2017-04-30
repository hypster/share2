<template>
<div class='iso-community-page'>
<div class='wrapper'>
  <sidebar class='sidebar'></sidebar>
  <right-column class='right-column'></right-column>
</div>
</div>
</template>
<script>
import sidebar from '@/components/iso-community-page-components/sidebar'
import rightColumn from '@/components/iso-community-page-components/right-column'
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
</style>