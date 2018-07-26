<template>
<div>
<latest-news></latest-news>
    <div class="section-wrapper">
      <important-news></important-news>
      <open-source></open-source>
    </div>
</div>
</template>
<script>
import latestNews from '@/components/main-page-components/latest-news'
import importantNews from '@/components/main-page-components/important-news'
import openSource from '@/components/main-page-components/open-source'
export default {
    data () {
        return {}
    },
    components: {
        latestNews,
        importantNews,
        openSource
    }
}
</script>
<style lang='stylus'>
.section-wrapper
  margin-bottom: 20px
</style>